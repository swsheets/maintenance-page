module.exports = {
  siteMetadata: {
    title: `SWSheets`,
    description: `The SWSheets maintenance page.`,
    author: `Nicholas Duffy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `swsheets-maintenance`,
        short_name: `maintenance`,
        start_url: `/`,
        background_color: `#EF922A`,
        theme_color: `#EF922A`,
        display: `minimal-ui`,
        icon: `src/images/swsheets-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
