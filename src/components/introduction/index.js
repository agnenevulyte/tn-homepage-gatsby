import React, { useState, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import Link from 'gatsby'
import { DynamicIcon } from '../index';
import "./introduction.css";
import "../../colors.css"
import "../../z-index.css"
import "../../fonts.css"

function Introduction({ data }) {
    const [textBackgroundColor, settextBackgroundColor] = useState('');
    const [isMobile, setMobile] = useState(false);
    useEffect(() => {
        const uutextBackgroundColor = (data.background && data.background !== 'white') ? data.background : '';
        settextBackgroundColor(uutextBackgroundColor);
    }, [data.background])

    useEffect(() => {
        if (window.innerWidth < 768 && window.innerHeight < 1023) {
            console.log(window.innerWidth)
            setMobile(true);
        }
    }, [])

    const generateCtaItem = (ctaText, ctaUrl, ctaIcon) => {
        // const CtaIcon = DynamicIcon(
        //   {
        //     icon: textBackgroundColor === 'tn_orange' ? `${ ctaIcon }-white` : ctaIcon,
        //     className: 'introduction__icon',
        //     wrapWithSpan: false
        //   }
        // );

        // return (
        //     <a
        //       href="`https://tradenation.com${ctaUrl}`"
        //       className="introduction__link"
        //     >
        //     {CtaIcon}
        //       <span className="introduction__link-text">
        //         { ctaText }
        //       </span>
        //     </a>
        //   );

        return (
            <span className="introduction__link-text">
                {ctaText}
            </span>
        )
    };

    const textColumnAlignment = (
        data.image
            && data.image.url
            && data.image_placement === 'left' ? 'right' : 'left'
    );

    return (
        <div className="introduction--wrapper">
            <div className={`introduction${textBackgroundColor ? ' introduction--background' : ''}`}>
                {data.image && data.image.url && (
                    <section className={`introduction__media introduction__media--${data.image_placement}`}>
                        <img className="introduction__img" src={isMobile ? data.image.mobile.url : data.image.url} alt={data.image.alt || ''} />
                    </section>
                )}
                <section className={`introduction__text introduction__text--${textColumnAlignment} ${textBackgroundColor ? `background-${textBackgroundColor}` : ''}`}>
                    <div className="introduction__title">
                        {RichText.render(data.heading)}
                    </div>
                    <div className={`introduction__dsc introduction__dsc--${textColumnAlignment}`}>
                        {RichText.render(data.body)}
                    </div>
                    {generateCtaItem(data.cta_text, data.cta_url, data.cta_icon)}
                </section>
            </div>
        </div>
    )
}

export default Introduction;
