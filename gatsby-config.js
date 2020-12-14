module.exports = {
  siteMetadata: {
    title: `Valloittavaa viestintää`,
    description: `Vapaa kirjoittaja ja viestinnän ammattilainen. Teen valloittavaa viestintää, jonka sanoma pirskahtelee kauas.`,
    author: `@gatsbyjs`,
    siteUrl: `https://mandariinimedia.fi`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-breakpoints`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
