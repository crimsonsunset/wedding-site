import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import config from '../../website-config';
import {styles} from '@styles-components/nav/nav-logo.style';

const svgLogo = require('@img/favicon/favicon.svg');


interface NavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
}


const useTag = `<use xlink:href=${svgLogo} />`;

// todo: replace png with svg logo and colorize
const NavLogo = () => {
  const z = window.innerWidth
  debugger;
  return (
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
    render={(data: NavLogoProps) => (
      <Link
        className={`${styles} site-nav-logo`}
        to="/"
      >
        <img src={svgLogo}/>

      </Link>
    )}
  />
)};

export default NavLogo;
