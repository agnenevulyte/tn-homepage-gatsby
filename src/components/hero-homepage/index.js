import { RichText } from "prismic-reactjs";
import React from 'react';
import { DynamicIcon } from '../index';
import Link from 'gatsby';
import styled from "styled-components";
import "./hero-homepage.css"



function HeroHomepage({data}) {
  console.log('loadingggg hero', data);
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
                        <div>{RichText.render(item.primary_heading)}</div>
                        
                
                        </div>
                        <div className="hero-homepage__title hero-homepage__title--white">
                        <div>{RichText.render(item.secondary_heading)}</div>
                    
                        
                      </div>
                      </div>
                    )
                  )}
        </section>
  )
}

export default HeroHomepage;