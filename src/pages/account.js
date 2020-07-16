import React from "react";
import { Link, graphql } from "gatsby";
import { PrismicTypes } from '../components/prismictypes';

export default function Tetst({ data }) {
  return (
    <div className="page page-homepage" style={{ color: `teal` }}>
      <Link to='/'>Home</Link>
      <p>API TEST</p>
      <h1>{data.tn.data.components[0].component.type}</h1>
      <h1>{data.tn.data.components[0].component.data.items[0].primary_heading[0].text}</h1>
      <h1>{data.tn.data.components[0].component.data.items[0].secondary_heading[0].text}</h1>
    </div>
    
  )
}

export const myQuery = graphql`
query MyQuery {
  tn {
    data {
      components {
        component {
          id
          type
          data {
            items {
              background_image {
                dimensions {
                  height
                  width
                }
                url
              }
              primary_heading {
                text
              }
              secondary_heading {
                text
              }
              primary_cta_display_value
              primary_cta_url
            }
          }
        }
      }
    }
  },
  }
  
`