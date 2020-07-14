import React from "react";
import Header from '../components/header';
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => (
    <StaticQuery
      query={graphql`
        query siteTitleQueryAndSiteTitleQuery {
          site {
            siteMetadata {
              title
             menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          <div>
            {children}
          </div>
        </React.Fragment>
      )}
    />
  )
  
  export default Layout;