import { RichText } from "prismic-reactjs";
import React from 'react';
import { DynamicIcon } from '../index';
import Link from 'gatsby';
import styled from "styled-components";
import "./hero-homepage.css"


function HeroHomepage({ data }) {

    const getImageTemplate = image => {
        const ImageComponent = styled.div`
          background-image: url(${image.mobile.url});
          @media (min-width: 480px) {
            background-image: url(${image.url});
          }}
          `;
        return (
            <ImageComponent className="hero-homepage__image" title={image.alt} />
        );
    }

    console.log('yay hero home page is rendering!!!!');
    console.log('data.items---', data.items);

    return (
        <section className="hero-homepage">
          <div className="hero-homepage__bkgd" />
          {data.items.map(
            (item, index) =>
            item.primary_heading.length > 0 && (
              <div
                className="hero-homepage__container"
                key={item.primary_cta_url + index.toString()}
              >
                <div className="hero-homepage__title hero-homepage__title--black">
                <div><p>        {RichText.render(item.primary_heading)}
                </p></div>  
        
                </div>
                <div className="hero-homepage__title hero-homepage__title--white">
                <div><p>        {RichText.asText(item.secondary_heading)}
                </p></div>  
                
              </div>
              </div>
            )
          )}
        </section>
      );
}

export default HeroHomepage;