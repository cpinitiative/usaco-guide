require('dotenv').config();

export const siteMetadata = {
  title: `USACO Guide`,
  description: `A free collection of curated, high-quality competitive programming resources to take you from USACO Bronze to USACO Platinum and beyond. Written by top USACO Finalists, these tutorials will guide you through your competitive programming journey.`,
  author: `@usacoguide`,
  siteUrl: `https://usaco.guide/`,
  keywords: ['USACO', 'Competitive Programming', 'USACO Guide'],
};

export const plugins = [
  {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      exclude: ['/license/', '/liveupdate/'],
    },
  },
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
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/solutions`,
      name: `solutions`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/announcements`,
      name: `announcements`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/assets`,
      name: `assets`,
    },
  },
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            // icon source: https://joshwcomeau.com/
            icon: `<svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 832,
            quality: 100,
            disableBgImageOnAlpha: true,
          },
        },
        // {
        //   resolve: require.resolve('./src/mdx-plugins/table-of-contents.ts'),
        // },
      ],
      remarkPlugins: [require(`remark-external-links`), require('remark-math')],
      rehypePlugins: [require('./src/mdx-plugins/rehype-math.js')],
      plugins: [
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            // icon source: https://joshwcomeau.com/
            icon: `<svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style="display: inline-block; vertical-align: middle;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
          },
        },
      ],
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
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-catch-links`,
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
      trackingId: 'UA-55628264-7',
      head: false,
      pageTransitionDelay: 100,
    },
  },
  {
    resolve: '@sentry/gatsby',
    options: {
      dsn:
        'https://2e28bddc353b46e7bead85347a099a04@o423042.ingest.sentry.io/5352677',
      denyUrls: [/extensions\//i, /^chrome:\/\//i],
      defaultIntegrations: false,
    },
  },
  {
    resolve: `gatsby-plugin-create-client-paths`,
    options: { prefixes: [`/class/*`] },
  },
  {
    // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
    resolve: 'gatsby-plugin-algolia',
    options: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      queries: require('./src/utils/algolia-queries'),
      enablePartialUpdates: true,
      skipIndexing: !!!process.env.ALGOLIA_APP_ID,
    },
  },
  'gatsby-plugin-webpack-bundle-analyser-v2',
  {
    resolve: `gatsby-plugin-hotjar`,
    options: {
      includeInDevelopment: false, // optional parameter to include script in development
      id: 2173658,
      sv: 6,
    },
  },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];
