module.exports = {
  siteMetadata: {
    title: `Gatsby Sanity Portfolio`,
    description: `A Gatbsy portfolio site with Sanity.io as a headless CMS.`,
    author: `Ger Hynes`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "jldh7tlj",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true,
        token:
          "sk7Pf9dycJPwlNl8zqkRRfW1ddRZfcMvgEfMH6R3xiJiEZupVoQXB7mHu4TXvnTDviwu1aWTcCG18TtokPdNLM7kbg05ZqjEUam4qe4yP1zYdtfieuCOjPUoM8dJiy8DAvLAzadSwBzdeiodwUxs2AKgB8hu9uJn5Uzmq7oyp5Z7tSmLJmON",
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
