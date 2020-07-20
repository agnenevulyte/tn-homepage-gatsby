/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`);

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: 'gatsby-source-multi-api',
      options: {
        apis: [
          "https://api.spacex.land/rest/rockets",
          "https://jsonplaceholder.typicode.com/users"
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
  ],
  siteMetadata: {
    title: 'TN home page',
    description: "This is where I write my thoughts.",
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
  }
}