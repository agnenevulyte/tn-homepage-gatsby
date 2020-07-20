import React from 'react';
import { generate as generateShortId } from 'shortid';
import BlogCard from '../blog-card';
import './related-articles.css'

function RelatedArticles({ data }) {

//     return (
//         <section className="related-articles">
//           <div className="related-articles__container">
//             <div className="related-articles__title">{ data.primary_heading }</div>
//             <div className="related-articles__cards-container">
// lallala
//             </div>
//           </div>
//         </section>
//       );
  return (
    <section className="related-articles">
      <div className="related-articles__container">
        <div className="related-articles__title">{ data.primary_heading }</div>
        <div className="related-articles__cards-container">
          { data.articles.slice(0, 3)
            .map((article) => (
              <div className="related-articles__card" key={ `related-articles-${ generateShortId() }` }>
                <BlogCard articleData={ article.article } />
              </div>
            )) }
        </div>
      </div>
    </section>
  );
};


export default RelatedArticles;
