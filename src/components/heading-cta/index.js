import React from 'react';
import { Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { generate as generateShortId } from 'shortid';
import './heading-cta.css';


function HeadingCta({ data }) {

  const generateCtaItem = ctaItem => {
    const linkClassName = `heading-cta__cta-item heading-cta__cta-item-${ctaItem.cta_background}`;

    return (
      <Link
        href={`https://tradenation.com${ctaItem.cta_url}`}
        className={linkClassName}
      >
        {ctaItem.cta_text}
      </Link>
    );
  };

  return (
    <section className="heading-cta">
      <div className="heading-cta__title">
        {RichText.render(data.heading)}
      </div>
      <div className="heading-cta__buttons">
      { data.cta_items.slice(0, 2)
        .map((ctaItem) => (
          <div className="heading-cta__button" key={ `heading-cta-${ generateShortId() }` }>
            { generateCtaItem(ctaItem) }
          </div>
        )) }
    </div>
    </section>
  );
};


export default HeadingCta;
