import React from 'react';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        {/* Appzi: Capture Insightful Feedback */}
        {/*<script*/}
        {/*  async*/}
        {/*  src="https://w.appzi.io/bootstrap/bundle.js?token=iIhbb"*/}
        {/*/>*/}
        {/* End Appzi */}

        <div
          dangerouslySetInnerHTML={{
            __html: `<link
            rel="preload"
            href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css"
            as="style"
            onload="this.rel='stylesheet'"
            onerror="this.rel=null"
          />
          <link
            rel="preload"
            href="https://rsms.me/inter/inter.css"
            as="style"
            onload="this.rel='stylesheet'"
            onerror="this.rel=null"
          />`,
          }}
        />
        {/*<link*/}
        {/*  rel="preload"*/}
        {/*  href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css"*/}
        {/*  as="style"*/}
        {/*  onLoad="this.onload=null;this.rel='stylesheet'"*/}
        {/*/>*/}
        {/*<link*/}
        {/*  rel="preload"*/}
        {/*  href="https://rsms.me/inter/inter.css"*/}
        {/*  as="style"*/}
        {/*  onLoad="this.onload=null;this.rel='stylesheet'"*/}
        {/*/>*/}
        {/*<noscript>*/}
        {/*  <link*/}
        {/*    rel="stylesheet"*/}
        {/*    href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css"*/}
        {/*  />*/}
        {/*  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />*/}
        {/*</noscript>*/}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
