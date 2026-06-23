import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/logo-square.png" />
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
  } catch (e) {}
})();`,
          }}
        />
      </Head>
      <body className="antialiased" suppressHydrationWarning={false}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
