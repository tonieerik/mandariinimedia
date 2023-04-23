module.exports = {
  siteMetadata: {
    title: `Mandariinimedia`,
    description: `Sisällöntuottaja, toimittaja, copywriter ja kielenhuoltaja samassa paketissa. Ulkoista viestintäsi kokeneelle freelancerille, joka hioo viestintäsi kuntoon.`,
    author: `@gatsbyjs`,
    siteUrl: `https://mandariinimedia.fi`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-breakpoints`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
