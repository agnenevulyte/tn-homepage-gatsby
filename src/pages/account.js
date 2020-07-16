import React from "react";
import { Link, graphql } from "gatsby";
import { useEffect, useState } from 'react';
import { PrismicTypes } from '../components';

export default function Tetst({ data }) {

  const [ contentLoaded, setContentLoaded ] = useState(false);

  useEffect(() => {
    data && data.tn && data.tn.data && data.tn.data.components && data.tn.data.components.length > 0 && setContentLoaded(true);
  }, []);
  // console.log('AT | contentLoaded:', contentLoaded);
  console.log('data-----', data)
  console.log('data.type---', data.tn.type)
  console.log('data.type---', data.tn.data)
  return (
    <div className="page page-homepage" style={{ color: `teal` }}>
      <Link to='/'>Home</Link>
      <p>API TEST</p>
      <h1>{data.tn.data.components[0].component.type}</h1>
      <h1>{data.tn.data.components[0].component.data.items[0].primary_heading[0].text}</h1>
      <h1>{data.tn.data.components[0].component.data.items[0].secondary_heading[0].text}</h1>

      {data && data.tn && data.tn.data && data.tn.data.components && contentLoaded && (
        <div>
          {data.tn.data.components && data.tn.data.components.map(({ component }, index) => {
            console.log('component----', component)
            const PrismicComponent = PrismicTypes[component.type];
            console.log('PrismicComponent----', PrismicComponent)
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

export const myQuery = graphql`
query MyQuery {
  tn {
    type
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