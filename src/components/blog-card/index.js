import React from 'react';
import DynamicIcon from '../dynamic-icon';
import moment from 'moment';
import './blog-card.css';

function BlogCard({ articleData, specificImage }) {
    
    const decodeArticleType = articleUid => {
        if (typeof articleUid !== 'string') {
          return null;
        }
        const words = articleUid.split('-').map(word => `${ word.charAt(0).toUpperCase() }${ word.slice(1) }`);
        return words.join(' ');
      };

  if (!articleData) {
    return null;
  }

  const articleImageUrl = (specificImage && specificImage.url) || (
    articleData.data.background_image
      && articleData.data.background_image.card
      && articleData.data.background_image.card.url
  );

  return (
    <a className="blog-card" to={ `https://tradenation.com/blog/${ articleData.uid }` }>
      { articleImageUrl && (
        <div className="blog-card__media-container">
          <div className="blog-card__img" style={ { backgroundImage: `url(${ articleImageUrl }` } }>
            <div className="blog-card__img-title">{ decodeArticleType(articleData.data.topic.uid) }</div>
          </div>
        </div>
      )}
      { !articleImageUrl && (
        <div className="blog-card__img-title">{ decodeArticleType(articleData.data.topic.uid) }</div>
      )}
      <div className="blog-card__text">
        <div className="blog-card__date">
          { moment(articleData.last_publication_date).format('ddd, Do MMM') }
        </div>
        <div className="blog-card__title">
          { articleData.data.heading[0] && articleData.data.heading[0].text }
        </div>
        { !articleImageUrl && (
          <div className="blog-card__description">
            { articleData.data.description1 }
          </div>
        )}
      </div>
      <div className="blog-card__arrow-hover" aria-hidden="true">
        <DynamicIcon icon="arrow-left" wrapWithSpan={ false } />
      </div>
    </a>
  );
};


export default BlogCard;
