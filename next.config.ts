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
  // Configure page extensions to include MDX files
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // 1. Redirects Configuration
  async redirects() {
    try {
      const path = await import('path');
      const fs = await import('fs');
      // Path assumes redirects.txt is in the root of your project
      const filePath = path.resolve(process.cwd(), 'src/redirects.txt');
      const redirectsData = fs.readFileSync(filePath, 'utf8');

      return redirectsData
        .split('\n')
        .filter(line => line.trim() !== '' && !line.startsWith('#'))
        .map(line => {
          const [from, to] = line.split('\t');
          return {
            source: from.trim(),
            destination: to.trim(),
            permanent: true,
          };
        });
    } catch (e) {
      console.warn('Could not find or parse src/redirects.txt', e);
      return [];
    }
  },

  // 2. Webpack Configuration
  webpack: (config, { isServer, webpack }) => {
    // Polyfill/Alias 'path' and disable 'fs' for client-side
    config.resolve.alias = {
      ...config.resolve.alias,
      path: require.resolve('path-browserify'),
    };

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    // Firebase Null Loader for Server-Side Rendering
    if (isServer) {
      config.module.rules.push({
        test: /firebase/,
        use: 'null-loader',
      });
    }

    // Provide 'process' for browser
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
