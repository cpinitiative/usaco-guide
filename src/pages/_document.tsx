import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    // F-24: suppressHydrationWarning belongs only on <Html> where the theme
    // class legitimately differs between SSR and client hydration.  Placing it
    // on <body> (or any container) suppresses ALL hydration warnings across the
    // entire subtree, masking real bugs.
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/assets/logo-square.png" />
        {/*
          F-20 / F-17: This inline script is the sole reason unsafe-inline is
          present in the CSP script-src directive.  To remove unsafe-inline,
          compute the SHA-256 hash of the __html string at build time and add it
          to the CSP:
            echo -n '<script content>' | openssl sha256 -binary | base64
          Then replace 'unsafe-inline' in next.config.ts with 'sha256-<hash>'.

          The script itself (F-11) is safe: it only compares the parsed value
          against string literals ('dark', 'system') — no eval, no innerHTML,
          no document.write.  Future developers MUST NOT extend this script to
          use the parsed localStorage value in any sink beyond strict comparison.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
  try {
    var key = 'guide:userData:theme';
    var stored = localStorage.getItem(key);
    var theme = stored ? JSON.parse(stored) : 'system';
    var systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var shouldUseDark = theme === 'dark' || (theme === 'system' && systemPrefersDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {
    if (typeof console !== 'undefined' && console.error) {
      console.error('Theme initialization failed:', e);
    }
  }
})();`,
          }}
        />
      </Head>
      {/* F-24: suppressHydrationWarning removed from <body> */}
      <body className="antialiased">
        {/* Skip to main content link for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-blue-700 focus:underline dark:focus:bg-gray-900 dark:focus:text-blue-300"
        >
          Skip to main content
        </a>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
