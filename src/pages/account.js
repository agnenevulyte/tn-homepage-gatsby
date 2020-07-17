import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { useEffect, useState } from 'react';
import { PrismicTypes } from '../components';
import HeroHomepage from '../components/hero-homepage'

export default function Tetst() {

  const [ contentLoaded, setContentLoaded ] = useState(false);
  // Client-side Runtime Data Fetching
  const [myData, setmyData] = useState({})

  useEffect(() => {
    // get data from API
    fetch(`https://ra9qbnj3ah.execute-api.eu-west-2.amazonaws.com/fin/marketing/docs/home-page`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setmyData(resultData.data)
        console.log('resultData.data---', resultData.data)
        console.log('fuck meeee---', resultData.data.components[0].component)
      })
  }, [])
console.log('myData---', myData)
// console.log('myData.components[0].component.data---', myData.components[0].component.data)
  useEffect(() => {
    myData && myData.components && myData.components.length > 0 && setContentLoaded(true);
  }, [myData]);

  // const componentData = myData.components[0].component.data;
  // console.log('AT | contentLoaded:', contentLoaded);
  // console.log('data-----', gatsbyRepoData)
  // console.log('data.type---', data.tn.type)
  // console.log('data.type---', data.tn.data)
  return (
    <div className="page page-homepage" style={{ color: `teal` }}>
      <Link to='/'>Home</Link>
      <p>API TEST</p>




      {myData && myData.components && contentLoaded && (
        // <HeroHomepage data={componentData} />
        <div>
          {myData.components && myData.components.map(({ component }, index) => {
            // console.log('component----', component)
            const PrismicComponent = PrismicTypes[component.type];
            // console.log('component.type---', component.type)
            // console.log('PrismicComponent----', PrismicComponent)
            return (
              PrismicComponent && (
                <PrismicComponent
                  type={component.type}
                  data={component.data}
                  key={component.type + index.toString()}
                />
              )
            );
          })}
        </div>
      )}

    </div>
    
  )
}

// export const myQuery = graphql`
// query MyQuery {
//   tn {
//     type
//     data {
//       components {
//         component {
//           id
//           type
//           data {
//             items {
//               background_image {
//                 dimensions {
//                   height
//                   width
//                 }
//                 url
//               }
//               primary_heading {
//                 text
//               }
//               secondary_heading {
//                 text
//               }
//               primary_cta_display_value
//               primary_cta_url
//             }
//           }
//         }
//       }
//     }
//   },
//   }
  
// `