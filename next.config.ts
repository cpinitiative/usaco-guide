import type { NextConfig } from 'next';

export const siteMetadata = {
  title: `USACO Guide`,
  description: `A free collection of curated, high-quality competitive programming resources to take you from USACO Bronze to USACO Platinum and beyond. Written by top USACO Finalists, these tutorials will guide you through your competitive programming journey.`,
  author: `@usacoguide`,
  siteUrl: `https://usaco.guide/`,
  keywords: ['USACO', 'Competitive Programming', 'USACO Guide'],
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  compress: true,
  poweredByHeader: false,
  output: 'standalone',

  images: {
    remotePatterns: [
      // F-18: scope remote patterns to the minimum required hostnames.
      // Wildcard subdomain patterns like *.google.com (which includes mail.google.com,
      // accounts.google.com, etc.) and *.firebaseio.com (Firebase RTDB — not image hosting)
      // are replaced with the specific hostnames actually needed.
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        // Firebase Storage (actual image hosting) — NOT *.firebaseio.com (Realtime DB)
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        // Google profile photos (OAuth avatars)
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        // Gravatar profile photos
        protocol: 'https',
        hostname: 'www.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            // F-17 / F-20: 'unsafe-inline' in script-src negates XSS protection.
            // The ONLY reason it is present is the theme-init inline script in
            // _document.tsx.  To remove it:
            //   1. Compute the SHA-256 hash of the script's __html string:
            //        node -e "const c=require('crypto');const s=`<paste script here>`;
            //                 console.log(c.createHash('sha256').update(s).digest('base64'));"
            //   2. Replace 'unsafe-inline' with "'sha256-<base64hash>'" in this CSP.
            //   3. For Google Analytics, use @next/third-parties/google (already used)
            //      which loads gtag.js via script src — no inline script required.
            // Until that migration is done, 'unsafe-inline' is a known, documented risk.
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net https://algolia.com https://*.algolia.net https://*.algolianet.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://avatars.githubusercontent.com https://raw.githubusercontent.com https://github.com https://lh3.googleusercontent.com https://www.gravatar.com https://s.gravatar.com https://firebasestorage.googleapis.com https://www.google-analytics.com; connect-src 'self' https://*.firebaseio.com https://*.googleapis.com https://*.algolia.net https://*.algolianet.com https://api.github.com https://usaco-guide.firebaseio.com; frame-src 'self' https://www.youtube.com https://algolia.com https://*.algolia.net https://*.algolianet.com;",
          },
        ],
      },
    ];
  },

  async redirects() {
    try {
      const path = await import('path');
      const fs = await import('fs');
      const filePath = path.resolve(process.cwd(), 'src/redirects.txt');
      const redirectsData = fs.readFileSync(filePath, 'utf8');

      return redirectsData
        .split('\n')
        .filter(line => line && line.trim() !== '' && !line.startsWith('#'))
        .map(line => {
          const [from, to] = line.split('\t');
          return {
            source: from.trim(),
            destination: to.trim(),
            permanent: true,
          };
        });
    } catch (e) {
      return [];
    }
  },

  webpack: (config, { isServer, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      path: require.resolve('path-browserify'),
    };

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    if (isServer) {
      config.module.rules.push({
        test: /firebase/,
        use: 'null-loader',
      });
    }

    if (!isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
        })
      );
    }

    return config;
  },
};

export default nextConfig;
