import React from "react"
import { Link, graphql } from "gatsby"

export default function Contact({data}) {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <p>Send us a message!</p>
      <h1>{data.site.siteMetadata.description}</h1>
    </div>
  )
}

export const query = graphql`
  query ContactPageQuery {
      site {
        siteMetadata {
          description
        }
      }
  }
`