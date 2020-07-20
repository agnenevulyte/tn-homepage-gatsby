import React from 'react';
// import {Link} from 'gatsby';
import Link from '../link'
import { RichText } from 'prismic-reactjs';
import FacebookSVG from '../../icons/facebook.svg';
import InstagramSVG from '../../icons/instagram.svg';
import TwitterSVG from '../../icons/twitter.svg';
import LinkedinSVG from '../../icons/linkedin.svg';
import YoutubeSVG from '../../icons/youtube.svg';
import MailSVG from '../../icons/mail.svg';
import PhoneSVG from '../../icons/phone.svg';
import FlagAuSVG from '../../icons/flag-au.svg';
import FlagGbSVG from '../../icons/flag-gb.svg';
// import OpeningTimes from './openingTimes/OpeningTimes';
import './footer.css';


const linkResolver = function(doc) {
    // Pretty URLs for known types
    if (doc.type === 'blog') return "/post/" + doc.slug;
    if (doc.type === 'page') return "/" + doc.slug;
    // Fallback for other types, in case new custom types get created
    return "/doc/" + doc.id;
  };
  
  // Insert <span> tags into legal text from prismic api span references
//   const mapSpans = (text, spans) => spans.reduce((p, { start, end }) => (
//     `${ p.slice(0, start) }<span>${ p.slice(start, end) }</span>${ p.slice(end) }`
//   ), text);
  
  const titleize = title => (title ? `${ title.charAt(0).toUpperCase() }${ title.slice(1).toLowerCase() }` : '');
  
  const Footer = ({ footer }) => {
    const {
      data
    } = footer;
  
    const socialIcons = {
      instagram: InstagramSVG,
      facebook: FacebookSVG,
      twitter: TwitterSVG,
      linkedin: LinkedinSVG,
      youtube: YoutubeSVG
    };
  
    const socialLinks = data.footer_social ? data.footer_social.map(social => {
      if (social.icon_name in socialIcons) {
        social.Icon = socialIcons[social.icon_name];
      } else {
        social.Icon = null;
      }
      return social;
    }).filter((item) => item.Icon !== null) : [];
  
    return (
      <footer className="footer">
  
        <section className="container footer__section">
          <div className="footer__left">
            <Link href="/" className="footer__logo-link" title="Home button - Tradenation logo">
              <img
                className="footer__logo"
                alt={ data.footer_logo.alt || '' }
                src={ data.footer_logo.url }
                width={ data.footer_logo.dimensions.width / 1.80 }
                height={ data.footer_logo.dimensions.height / 1.80 }
              />
            </Link>
            <div className="footer__social">
              { socialLinks.map(social => (
                <Link href={ social.url } key={ social.icon_name } target="_blank" className="footer__social-link" title={ titleize(social.icon_name) }>
                  <social.Icon />
                </Link>
              )) }
            </div>
          </div>
          <div className="footer__right footer__right--cols">
            <nav className="footer__navigation">
              { data.navigation_items.map(link => (
                <Link href={ `https://tradenation.com${link.url}` || '/' } key={ link.display_value } className="footer__navigation-link">{ link.display_value }</Link>
              )) }
            </nav>
            <div className="footer__faq">
              <Link href="/faq" className="footer__faq-title">FAQ</Link>
              { data.faqs.map(faq => (
                <Link href={ `https://tradenation.com${faq.url}` || '/' } key={ faq.display_value } className="footer__faq-link">{ faq.display_value }</Link>
              )) }
            </div>
          </div>
        </section>
        <section className="container footer__section">
          <div className="footer__left">
            <h3 className="footer__section-title">Get in touch</h3>
          </div>
          <div className="footer__right footer__right--cols">
            <div className="footer__email">
              <MailSVG />
              <a href="mailto:support@tradenation.com" target="_self">support@tradenation.com</a>
            </div>
            <div className="footer__phone">
              <PhoneSVG className="footer__phone-icon" />
              { data.contact.map(details => (
                <div className="footer__phone-country" key={ `tel-${ details.flag_name }` }>
                  { details.flag_name === 'gb' && <FlagGbSVG className="footer__country-icon" /> }
                  { details.flag_name === 'au' && <FlagAuSVG className="footer__country-icon" /> }
                  <a href={ `tel:${ details.tel_number.replace(/ /g, '') }` } target="_self">{ details.tel_number }</a>
                  
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="container footer__section">
          <div className="footer__left">
            <h3 className="footer__section-title">The legal stuff</h3>
          </div>
          <div className="footer__right">
  
            { data.legal && data.legal.map((each, i) => {
              return (
                <div key={i} className="footer__legal">
                <div>
                  { RichText.render(each.body, linkResolver) }
                  </div>
                </div>
              )
            })}
  
          </div>
        </section>

        <div className="footer__meta">
          <span className="footer__copyright">&copy; { data.copyright }</span>
          { data.meta_links.map(link => (
            <Link className="footer__meta-link" key={ link.display_value } href={ link.url }>
              { link.display_value }
            </Link>
          )) }
        </div>
      </footer>
    );
  };
  

  
  export default Footer;
  