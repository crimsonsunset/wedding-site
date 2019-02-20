import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import config from '../../website-config';
import {styles} from './site-nav-logo.style';

const svgLogo = require('@img/favicon/favicon.svg');


interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
}


var useTag = `<use xlink:href=${svgLogo} />`;

// todo: replace png with svg logo and colorize
const SiteNavLogo = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        logo: file(relativePath: { eq: "img/favicon/android-chrome-192x192.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    // tslint:disable-next-line:react-this-binding-issue
    render={(data: SiteNavLogoProps) => (
      <Link
        className={`${styles} site-nav-logo`}
        to="/"
      >
        {/*{data.logo ? (*/}
          {/*<img*/}
            {/*src={data.logo.childImageSharp.fixed.src}*/}
            {/*alt={config.title}*/}
          {/*/>*/}
        {/*) : (*/}
          {/*config.title*/}
        {/*)}*/}





          {/*<svg*/}
            {/*className="logo-svg"*/}
            {/*dangerouslySetInnerHTML={{__html: useTag }} />*/}


        {/*<svg className="logo-svg">*/}
          {/*<use xlinkHref={`${svgLogo}`} />*/}
        {/*</svg>*/}


        <img
          src={svgLogo}
        />

        {/*<object*/}
          {/*type="image/svg+xml"*/}
          {/*data={svgLogo}*/}
          {/*className="logo"*/}
        {/*>*/}
          {/*Logozz*/}
        {/*</object>*/}

      </Link>
    )}
  />
);

export default SiteNavLogo;
