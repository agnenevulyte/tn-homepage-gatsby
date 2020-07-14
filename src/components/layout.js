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
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </React.Fragment>
      )}
    />
  )
  
  export default Layout;