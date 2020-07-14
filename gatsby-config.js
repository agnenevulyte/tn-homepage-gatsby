/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`);

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
  siteMetadata: {
    title: 'TN home page',
    menuLinks:[
      {
         name:'What we do',
         link:'/'
      },
      {
         name:'Why choose us',
         link:'/'
      },
      {
        name:'Who we are',
        link:'/'
      },
      {
        name:'FAQ',
        link:'/'
      },
      {
        name:'Discover More',
        link:'/'
      },
    ]
  },
  plugins: []
}