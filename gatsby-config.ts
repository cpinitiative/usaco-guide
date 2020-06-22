export const siteMetadata = {
  title: `USACO Guide`,
  description: `A collection of curated, high-quality resources to take you from Bronze to Platinum.`,
  author: `@usacoteam`,
};
export const plugins = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content`,
      name: `content`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      gatsbyRemarkPlugins: [
        `gatsby-remark-autolink-headers`,
        {
          resolve: 'gatsby-remark-custom-blocks',
          options: {
            blocks: {
              info: {
                containerElement: 'info-block',
                title: 'optional',
              },
            },
          },
        },
        {
          resolve: `gatsby-remark-katex`,
          options: {
            // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
            strict: `ignore`,
          },
        },
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            noInlineHighlight: true,
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
  `gatsby-plugin-sharp`,
  // {
  //   resolve: `gatsby-plugin-manifest`,
  //   options: {
  //     name: `gatsby-starter-default`,
  //     short_name: `starter`,
  //     start_url: `/`,
  //     background_color: `#663399`,
  //     theme_color: `#663399`,
  //     display: `minimal-ui`,
  //     // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
  //   },
  // },
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];
