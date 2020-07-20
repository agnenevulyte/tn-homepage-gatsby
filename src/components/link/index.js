import React from 'react';
import { Link as ReactLink } from 'gatsby';

const isLinkExternal = url => {
    return url && url.match(/^(http|https):\/\/|^(mailto|tel)/);
};

const Link = ({
  href,
  children = null,
  ...props
}) => {
  // fallback for when url is not set in prismic api
  if (!href) return null;

  return isLinkExternal(href) ? (
    <a href={ href } { ...props }>
      { children }
    </a>
  ) : (
    <ReactLink to={ href } { ...props }>
      { children }
    </ReactLink>
  );
};


export default Link;
