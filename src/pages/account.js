import React from "react";
import { Link, graphql } from "gatsby";
import { PrismicTypes } from '../components/prismictypes';

export default function Tetst({ data }) {
  return (
    <div className="page page-homepage" style={{ color: `teal` }}>
      <Link to='/'>Home</Link>
      <p>API TEST</p>
      <h1>{data.allMultiApiSourceRestRockets.edges[0].node.country}</h1>
      <h1>{data.allMultiApiSourceUsers.edges[0].node.name}</h1>
      <h1>{data.tn.uid}</h1>
      <h1>{data.tn.type}</h1>
      <h1>{data.tn.data.title}</h1>



    </div>
    
  )
}

export const myQuery = graphql`
query MyQuery {
    allMultiApiSourceRestRockets {
      edges {
        node {
          country
        }
      }
    },
    allMultiApiSourceUsers {
      edges {
        node {
          name
        }
      }
    },
    tn {
        type
        uid
        data {
          footer {
            data {
              copyright
              contact {
                tel_number
              }
              faqs {
                display_value
                url
              }
              footer_logo {
                alt
                dimensions {
                  height
                  width
                }
                url
              }
              footer_social {
                icon_name
                url
              }
              legal {
                body {
                  spans {
                    data {
                      id
                      isBroken
                      lang
                      link_type
                      slug
                      tags
                      type
                      uid
                    }
                    end
                    start
                    type
                  }
                  text
                  type
                }
              }
              meta_links {
                display_value
                url
              }
              name
            }
            id
            isBroken
            lang
            link_type
            slug
            type
          }
          meta_description
          name
          slug
          title
          visibility
        }
    },
  }
  
`