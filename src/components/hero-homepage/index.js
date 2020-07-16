import { RichText } from "prismic-reactjs";
import React from 'react';
import { DynamicIcon } from '../index';
import Link from 'gatsby';
import styled from "styled-components";


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
                    {RichText.render(item.primary_heading)}
                  </div>
  
                  <div className="hero-homepage__title hero-homepage__title--white">
                    {RichText.render(item.secondary_heading)}
                  </div>
  
                  <div className="hero-homepage__links">
                    {item.primary_cta_url && (
                      <Link
                        className="hero-homepage__link hero-homepage__link--white"
                        href={item.primary_cta_url}
                      >
                        {item.primary_cta_display_value}
                        <span className="hero-homepage__link-arrow hero-homepage__link-arrow--white">
                          <DynamicIcon icon="circle-arrow-right-white" />
                        </span>
                      </Link>
                    )}
                    {item.secondary_cta_url && (
                      <Link
                        className="hero-homepage__link hero-homepage__link--black"
                        href={item.secondary_cta_url}
                      >
                        {item.secondary_cta_display_value}
                        <span className="hero-homepage__link-arrow hero-homepage__link-arrow--orange">
                          <DynamicIcon icon="circle-arrow-right" />
                        </span>
                      </Link>
                    )}
                  </div> 
                  {item.background_image.mobile.copyright}
                  {item.background_image.url &&
                    this.getImageTemplate(item.background_image)}
                </div>
              )
          )}
        </section>
      );
}

export default HeroHomepage;