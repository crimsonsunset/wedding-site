import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import config from '../../website-config';
import {styles} from './site-nav-logo.style';


interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
}

const SiteNavLogo = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        logo: file(relativePath: { eq: "img/favicon/favicon-big.png" }) {
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
        {data.logo ? (
          <img
            src={data.logo.childImageSharp.fixed.src}
            alt={config.title}
          />
        ) : (
          config.title
        )}
      </Link>
    )}
  />
);

export default SiteNavLogo;
