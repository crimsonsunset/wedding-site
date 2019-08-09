// tslint:disable:no-http-string
import {graphql, Link, StaticQuery} from 'gatsby';
import * as React from 'react';
import {Component} from 'react';
import NavLogo from './NavLogo';
import {navStyles} from '@styles-components/nav/nav.style';
import {breakpoints} from '@styles/variables';
import AniLink from "gatsby-plugin-transition-link/AniLink";

// import { useSpring,animated } from 'react-spring';
import {Spring, animated} from 'react-spring/renderprops';
import {findIndex, cloneDeep, bindAll, forEach} from 'lodash';
import {getWindowVariable} from '@util/helpers';


const IMG_GALLERY_QUERYZ = graphql`
  query imgGalleryQueryz {
    allFile(filter: { absolutePath: { regex: "/transition-images/" } }) {
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
    ['others']:[]
  };

  constructor(props: SiteNavProps) {
    super(props);
    this.state = {isOpen: false};
    bindAll(this, [
      'renderNav',
    ]);
  }

  renderNav(transitionImages?: any){
    const {isHome = false} = this.props;
    const homeStr = (isHome) ? 'home' : '';
    forEach(transitionImages.allFile.edges, ({node}, i) => {
      console.log('image, i');
      if(node.name.includes('eyes')){
        this.transitionImages['main'] = node;
      }else{
        this.transitionImages['others'].push(node)
      }
    });

    console.log('this.transitionImages');
    console.log(this.transitionImages);

    const isMobile = (getWindowVariable('innerWidth') < breakpoints[2]);
    const {isOpen} = this.state;
    const navHeight = NAV_ITEMS.length * 68;
    const mobileMargin = (isMobile && !isHome) ? Number(`-${navHeight}`) : 0;

    let currNavItems = (this.props.items) ? this.props.items : cloneDeep(NAV_ITEMS);
    const hasHome = (findIndex(currNavItems, ['name', 'Home']) !== -1);

    // add link for home if on mobile
    if (isMobile && !hasHome && !isHome) {
      currNavItems.unshift({
        name: 'Home',
        link: '',
      });
    }


    return (
      <nav className={`${navStyles} ${homeStr}`}>
        <React.Fragment>

          {/*NAV LOGO*/}
          {!isHome &&
          <div
            onClick={() => this.setState({isOpen: !this.state.isOpen})}
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
            from={{marginTop: (isOpen) ? mobileMargin : 0}}
            to={{marginTop: (isOpen) ? 0 : mobileMargin}}
          >
            {(props) => {
              return (
                <ul
                  style={props}
                  className={''}
                  role="menu">
                  {/* TODO: mark current nav item - add class nav-current */}
                  {
                    currNavItems.map((navItem, navIndex) => {
                      const {name, link, isExternal} = navItem;
                      const linkElem = (isExternal) ?
                        (<a
                          rel="noreferrer"
                          href={link} target="_blank">{name}</a>)
                        :
                        // (<Link to={link}>{name}</Link>);

                        // (<AniLink
                        //   paintDrip
                        //   to={link}
                        //   duration={1}>
                        //   {name}
                        // </AniLink>);

                        (


                          <AniLink
                            cover
                            to={link}
                            direction="left"
                            duration={1}
                            bg={`
                              url(${this.transitionImages.main.childImageSharp.fixed.src})
                              center / cover   /* position / size */
                              no-repeat        /* repeat */
                              fixed            /* attachment */
                              padding-box      /* origin */
                              content-box      /* clip */
                             `}


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
                          {(navIndex !== currNavItems.length - 1) && <hr/>}
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
    );
  }

  render() {
    return <StaticQuery
      query={IMG_GALLERY_QUERYZ}
      render={this.renderNav}
    />
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
  isExternal?: boolean;
}

export let NAV_ITEMS: Array<NavItem> = [

  {
    name: 'Wedding',
    link: 'wedding',
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
    // isExternal: true,
  },
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
}
