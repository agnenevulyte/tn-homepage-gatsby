import React, { Fragment } from 'react';
// import {Link} from 'gatsby';
import Link from '../link'
import styled from 'styled-components';
import DynamicIcon from '../dynamic-icon';
import './list-block.css';

function ListBlock({ data }) {


  const hasMedia = data.image && data.image.url && data.image.mobile && data.image.mobile.url;
  const ImageComponent = styled.div`
    ${ hasMedia ? `
    background-image: url(${ data.image.mobile.url});
    @media (min-width: 480px) {
      background-image: url(${ data.image.url});
    }}
    ` : 'background: none; height: auto;'}
  `;

  const getImageTemplate = () => (
    <ImageComponent
      className={`list-block__img ${data.background_colour === 'white' ? 'list-block__img-shadow-bg' : ''}`}
      title={data.image.alt}
    />);


  const generateCtaItem = (bgColor, ctaUrl, ctaText, ctaIcon) => {

    const CtaIcon = DynamicIcon(
      {
        icon: bgColor === 'tn_orange' ? `${ctaIcon}-white` : ctaIcon,
        className: 'introduction__icon',
        wrapWithSpan: false
      }
    );

    return (
      <Fragment>
        <aside></aside>

        <div className="list__block__flex-stack">
          <Link
            href={ctaUrl}
            className="list__block__cta__link"
          >
            {CtaIcon}
          </Link>

          <span className="introduction__link-text list__block__cta__alignment">
            {ctaText}
          </span>

        </div>

      </Fragment>
    );
  };

  return (
    <div className="list-block">
      <div className={`list-block__child-container list-block__child-container--${data.background_colour}`}>
        <h2 className="list-block__container-title">
          {data.list_title}
        </h2>

        {data.list_items.map((item, index) => {
            return (
              <section
                className="list-block__container"
                key={item.list_icon + index.toString()}
              >
                <aside className="list-block__container-aside">
                  <DynamicIcon icon={item.list_icon} className="list-block__icon" />
                </aside>
  
                <h3 className="list-block__subtitle">
                  {item.list_heading}
                </h3>
                <p className="list-block__text">
                  {item.list_text}
                </p>
  
                {item.cta_url && item.cta_text && item.cta_icon &&
                  generateCtaItem(data.background_colour, item.cta_url, item.cta_text, item.cta_icon)
                }
  
              </section>
            );
          })
          }

      </div>
      <div className="list-block__img-container">
        {getImageTemplate()}
      </div>
    </div>
  );
};

// ListBlock.propTypes = {
//   data: PropTypes.object
// };

export default ListBlock;
