import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/logo-square.png" />
      </Head>
      <body className="antialiased" suppressHydrationWarning={false}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
