// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import NavLogo from './NavLogo';
import { navStyles } from '@styles-components/nav/nav.style';


class SiteNav extends React.Component<SiteNavProps, SiteNavState> {

  constructor(props: SiteNavProps) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    const { isHome = false } = this.props;
    const homeStr = (isHome) ? 'home' : '';
    return (
      <nav className={`${navStyles} ${homeStr}`}>
        <React.Fragment>
          {!isHome && <NavLogo/>}
          <ul className={''} role="menu">
            {/* TODO: mark current nav item - add class nav-current */}
            {
              NAV_ITEMS.map((navItem, navIndex) => {
                const { name, link, isExternal } = navItem;
                const linkElem = (isExternal) ?
                  (<a href={link} target="_blank">{name}</a>) :
                  (<Link to={link}>{name}</Link>);
                return (
                  <React.Fragment
                    key={navIndex}
                  >
                    <li
                      role="menuitem">
                      {linkElem}
                    </li>
                    {navIndex !== NAV_ITEMS.length - 1 && <hr/>}
                  </React.Fragment>
                );
              })
            }

          </ul>
        </React.Fragment>

      </nav>
    );
  }
}

export default SiteNav;


const NAV_ITEMS = [

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
    link: 'https://elevatephotography.com/blog/jess-joe-keystone-winter-engagement-photos/',
    isExternal: 'true',
  },
  // {
  //   name: 'Registry',
  //   link: '/registry',
  //   // ! todo: update when registry is ready
  //   // isExternal: true,
  // },
  {
    name: 'RSVP',
    link: 'https://jess-joe-wedding.app.rsvpify.com/',
    isExternal: 'true',
  },
];


interface SiteNavProps {
  isHome?: boolean;
}

interface SiteNavState {
  isOpen: boolean;
}
