// tslint:disable:no-http-string
import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import { Component } from 'react';
import NavLogo from './NavLogo';
import { navStyles } from '@styles-components/nav/nav.style';
import { breakpoints, colors } from '@styles/variables';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import { Spring } from 'react-spring/renderprops';
import { findIndex, bindAll, forEach, sample, get } from 'lodash';
import { getAspectRatio, getWindowVariable, setLatestImageIndex } from '@util/helpers';


export const IMG_GALLERY_QUERYZ = graphql`
  query imgGalleryQueryz {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      edges{
        node{
          #          size
          #          prettySize
          name
          childImageSharp {
            fixed (width: 2000){
              width
              height
              src
              #              srcSet
            }
          }
        }
      }
    }
  }`;


class SiteNav extends Component<SiteNavProps, SiteNavState> {

  private transitionImages = {
    portrait: [],
    landscape: [],
  };

  private windowType = 'NA';
  private portraitLength = -1;
  private landscapeLength = -1;
  private imageType = '';

  constructor(props: SiteNavProps) {
    super(props);
    this.state = {
      isOpen: false,
      didInit: false,
    };
    bindAll(this, [
      'renderNav',
    ]);
  }

  private _storeImages(transitionImages) {
    const windowWidth = getWindowVariable('innerWidth');
    const windowHeight = getWindowVariable('innerHeight');

    if(!windowWidth){
      return;
    }

    const { type: windowType } = getAspectRatio(windowWidth, windowHeight);
    this.imageType = windowType;

    // sort images into buckets
    forEach(transitionImages.allFile.edges, ({ node }) => {
      const { height, width } = node.childImageSharp.fixed;
      const { type } = getAspectRatio(width, height);

      if(ALLOWED_IMAGES.includes(node.name)){
        this.transitionImages[type].push(node);
      }
    });

    this.portraitLength = this.transitionImages['portrait'].length;
    this.landscapeLength = this.transitionImages['landscape'].length;

    this.windowType = windowType;
    this.setState({
      didInit: true,
    });

  }

  private renderNav(transitionImages?: any) {
    const { isHome = false } = this.props;
    const homeStr = (isHome) ? 'home' : '';

    if (!this.state.didInit) {
      this._storeImages(transitionImages);
    }
    const { windowType } = this;
    const { isOpen } = this.state;

    const isMobile = (getWindowVariable('innerWidth') < breakpoints[2]);
    const navHeight = NAV_ITEMS.length * 68;
    const mobileMargin = (isMobile && !isHome) ? Number(`-${navHeight}`) : 0;

    const hasHome = (findIndex(NAV_ITEMS, ['name', 'Home']) !== -1);

    // add link for home if on mobile
    if (isMobile && !hasHome && !isHome) {
      NAV_ITEMS.unshift({
        name: 'Home',
        link: '/',
        imageNode: this.transitionImages[windowType][0],
      });
    }

    // mobile and home cant keep nav on top (looks bad)
    const WrapperElem = (isHome || isMobile) ? React.Fragment : TransitionPortal;
    const wrapperProps = (isHome || isMobile) ? {} : { level: 'top' };


    const { imageType } = this;
    const currLength = get(this, `${imageType}Length`);

    const imageIndex = setLatestImageIndex(currLength);
    const image = get(this, `transitionImages.${imageType}[${imageIndex}].childImageSharp.fixed.src`);

    return (
      <WrapperElem
        {...wrapperProps}
      >
        <nav className={`${navStyles} ${homeStr}`}>
          <React.Fragment>

            {/*NAV LOGO*/}
            {!isHome &&
            <div
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
              className={'logo-container'}>
              <NavLogo
              />
            </div>
            }

            {/*NAV BODY*/}
            <Spring
              config={{
                tension: 2000,
                friction: 100,
                precision: 1,
                duration: 300,
              }}
              from={{ marginTop: 0 }}
              to={{ marginTop: (isOpen) ? 0 : mobileMargin }}
            >
              {(props) => {
                return (
                  <ul
                    style={props}
                    className={''}
                    role="menu">
                    {/* TODO: mark current nav item - add class nav-current */}
                    {
                      NAV_ITEMS.map((navItem, navIndex) => {
                        const { name, link, isExternal } = navItem;

                        // home link gets drip
                        const linkProps = (link === '/') ?
                          {
                            paintDrip: true,
                            hex: colors.$navy,
                            duration: 0.6,
                            to: link,
                          }
                          :
                          {
                            cover: true,
                            to: link,
                            direction: 'left',
                            duration: 1.4,
                            bg: `
                                url(${image})
                                center center / cover
                                no-repeat
                                fixed
                                padding-box
                                content-box
                                  `,
                          };

                        // external links use a tags
                        const linkElem = (isExternal) ?
                          (<a
                            rel="noreferrer"
                            href={link} target="_blank">{name}</a>)
                          :
                          (
                            <AniLink
                              {...linkProps}
                            >
                              {name}
                            </AniLink>);


                        return (
                          <React.Fragment
                            key={navIndex}
                          >
                            <li
                              role="menuitem">
                              {linkElem}
                            </li>
                            {(navIndex !== NAV_ITEMS.length - 1) && <hr/>}
                          </React.Fragment>
                        );
                      })
                    }
                  </ul>
                );
              }}

            </Spring>
          </React.Fragment>
        </nav>
      </WrapperElem>
    );
  }

  render() {
    return <StaticQuery
      query={IMG_GALLERY_QUERYZ}
      render={this.renderNav}
    />;
  }
}

interface SiteNavProps {
  items?: Array<NavItem>;
  isHome?: boolean;
}

// const z = (<Spring {...springConfigs.fadeAndPan}>
//   {(styles) => {
//     return (
//       <ul
//         style={styles}
//         className={''}
//         role="menu">
//         {/* TODO: mark current nav item - add class nav-current */}
//         {
//           NAV_ITEMS.map((navItem, navIndex) => {
//             const { name, link, isExternal } = navItem;
//             const linkElem = (isExternal) ?
//               (<a href={link} target="_blank">{name}</a>) :
//               (<Link to={link}>{name}</Link>);
//             return (
//               <React.Fragment
//                 key={navIndex}
//               >
//                 <li
//                   role="menuitem">
//                   {linkElem}
//                 </li>
//                 {navIndex !== NAV_ITEMS.length - 1 && <hr/>}
//               </React.Fragment>
//             );
//           })
//         }
//       </ul>
//     );
//   }}
// </Spring>
// )


// render() {
//   const { isHome = false } = this.props;
//   const homeStr = (isHome) ? 'home' : '';
//   return (
//     <nav className={`${navStyles} ${homeStr}`}>
//       <React.Fragment>
//         {!isHome && <NavLogo/>}
//         <ul className={''} role="menu">
//           {/* TODO: mark current nav item - add class nav-current */}
//           {
//             NAV_ITEMS.map((navItem, navIndex) => {
//               const { name, link, isExternal } = navItem;
//               const linkElem = (isExternal) ?
//                 (<a href={link} target="_blank">{name}</a>) :
//                 (<Link to={link}>{name}</Link>);
//               return (
//                 <React.Fragment
//                   key={navIndex}
//                 >
//                   <li
//                     role="menuitem">
//                     {linkElem}
//                   </li>
//                   {navIndex !== NAV_ITEMS.length - 1 && <hr/>}
//                 </React.Fragment>
//               );
//             })
//           }
//
//         </ul>
//       </React.Fragment>
//
//     </nav>
//   );
// }


export default SiteNav;


type NavItem = {
  name: string;
  link: string;
  imageNode?: any;
  isExternal?: boolean;
}

const ALLOWED_IMAGES = [
  // 'ski-onesies',
  'nyc-skyline',
  'ps-theater',

  'minus-zero-sign',
  'lucy',
  // 'lookin-cute',
  'in-trees',
  // 'formal',
  'flavortown',
  'ps-kiss',
  // 'first-ski',
  'blind-tiger-4',
];

export let NAV_ITEMS: Array<NavItem> = [

  {
    name: 'Wedding',
    link: '/wedding',
  },
  {
    name: 'Travel',
    link: '/travel',
  },
  {
    name: 'Lodging',
    link: '/lodging',
  },
  {
    name: 'Activities',
    link: '/activities',
  },
  {
    name: 'Photos',
    link: '/photos',
    // link: 'https://elevatephotography.com/blog/jess-joe-keystone-winter-engagement-photos/',
  },
  // {
  //   name: 'About',
  //   link: '/about',
  // },

  {
    name: 'Registry',
    link: '/registry',
    isExternal: true,
  },
  // {
  //   name: 'RSVP',
  //   link: '/rsvp',
  //   isExternal: true,
  // },
];


interface SiteNavProps {
  isHome?: boolean;
}

interface SiteNavState {
  isOpen: boolean;
  didInit: boolean;
}
