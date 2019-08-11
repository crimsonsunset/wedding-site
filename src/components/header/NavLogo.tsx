import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { styles } from '@styles-components/nav/nav-logo.style';
import { breakpoints, colors } from '@styles/variables';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { getWindowVariable } from '@util/helpers';

const svgLogo = require('@img/favicon/favicon.svg');

interface NavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
}


function AnimatedLogo() {
  const [state, toggle] = useState(false);
  const {x} = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <div
      className={`${styles} site-nav-logo`}
      onClick={() => toggle(!state)}>
      <animated.div
        style={{
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate((x2) => `scale(${x2})`),
        }}>
        <img src={svgLogo}/>
      </animated.div>
    </div>
  );
}


const NavLogo = () => {
  const isMobile = (getWindowVariable('innerWidth') < breakpoints[2]);

  const currLogo = (isMobile) ?

    (<AnimatedLogo/>) :


    (<AniLink
      className={`${styles} site-nav-logo`}
      paintDrip
      hex={colors.$navy}
      to={'/'}
      duration={0.6}>
      <img src={svgLogo}/>
    </AniLink>);

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
      render={() => (
        currLogo
      )}
    />
  );
};

export default NavLogo;


// todo: replace png with svg logo and colorize
// const useTag = `<use xlink:href=${svgLogo} />`;
