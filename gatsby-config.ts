export const siteMetadata = {
  title: `USACO Guide`,
  description: `A collection of curated, high-quality resources to take you from Bronze to Platinum.`,
  author: `@usacoteam`,
};
export const plugins = [
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      allowNamespaces: true,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content`,
      name: `content`,
    },
  },
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        `gatsby-remark-autolink-headers`,
        {
          resolve: `gatsby-remark-katex`,
          options: {
            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
            strict: `ignore`,
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 832,
            quality: 90,
          },
        },
        // {
        //   resolve: require.resolve('./src/mdx-plugins/code-tabs.ts'),
        // },
      ],
      plugins: [`gatsby-remark-autolink-headers`],
    },
  },
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [
        require(`tailwindcss`),
        require(`autoprefixer`),
        ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
      ],
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `USACO Guide`,
      short_name: `USACO`,
      start_url: `/`,
      background_color: `#113399`,
      theme_color: `#113399`,
      display: `minimal-ui`,
      icon: `src/assets/logo-square.png`, // This path is relative to the root of the site.
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: 'UA-55628264-7',
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // Setting this parameter is optional
      // anonymize: true,
      // Setting this parameter is also optional
      // respectDNT: true,
      // Avoids sending pageview hits from custom paths
      // exclude: ["/preview/**", "/do-not-track/me/too/"],
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 100,
      // Enables Google Optimize using your container Id
      // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
      // Enables Google Optimize Experiment ID
      // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
      // Set Variation ID. 0 for original 1,2,3....
      // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      // Defers execution of google analytics script after page load
      // defer: false,
      // Any additional optional fields
      // sampleRate: 5,
      // siteSpeedSampleRate: 10,
      // cookieDomain: "example.com",
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];
