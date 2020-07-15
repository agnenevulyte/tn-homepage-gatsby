import React from "react";
import { Link, graphql } from "gatsby"

export default function Tetst({data}) {
  return (
    <div style={{ color: `teal` }}>
        <Link to='/'>Home</Link>
        <p>API TEST</p>
        <h1>{data.allMultiApiSourceRestRockets.edges[0].node.country}</h1>
        <h1>{data.allMultiApiSourceUsers.edges[0].node.name}</h1>
        <h1>{data.allMultiApiSourceFin}</h1>
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
  }
  
`