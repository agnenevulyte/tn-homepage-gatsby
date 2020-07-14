// import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import '../../static/images/header_logo.svg';

// export default ({ data }) => (
//     <div>
//     {console.log('data', data)}
//         <h1>Hello gatsby-image</h1>
//         <Img fixed={data.file.childImageSharp.fixed} />
//     </div>
// )

// export const query = graphql`
//     query {
//         file(relativePath: { eq: "static/images/header_logo.svg" }) {
//         childImageSharp {
//             # Specify the image processing specifications right in the query.
//             # Makes it trivial to update as your page's design changes.
//             fixed(width: 125, height: 125) {
//             ...GatsbyImageSharpFixed
//             }
//         }
//         }
//     }
// `