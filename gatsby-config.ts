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
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];
