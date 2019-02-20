// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import styled, { css } from 'react-emotion';

// import { SocialLink } from '../../styles/shared';
// import config from '../../website-config';
// import Facebook from '../icons/facebook';
// import Twitter from '../icons/twitter';
import SiteNavLogo from './SiteNavLogo';

const HomeNavRaise = css`
  @media (min-width: 900px) {
    position: relative;
    top: -70px;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 80px;
  font-size: 1.2rem;
`;

const SiteNavLeft = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding-bottom: 80px;
  letter-spacing: 0.4px;
  white-space: nowrap;

a{
margin-right: 10px;
}

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 4vw;
  }
`;

const NavStyles = css`
  display: flex;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;

  li {
    display: block;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  li a {
    display: block;
    margin: 0;
    padding: 10px 12px;
    color: #fff;
    opacity: 0.8; 
    font-size: 30px;
    letter-spacing: -1px;
    text-shadow: 1px 1px black;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }
`;

interface SiteNavProps {
  isHome?: boolean;
}

interface SiteNaveState {
  isOpen: boolean;
}

class SiteNav extends React.Component<SiteNavProps, SiteNaveState> {

  constructor(props: SiteNavProps) {
    super(props);
    this.state = { isOpen: false };
  }

  // openModal = () => {
  //   if (this.subscribe.current) {
  //     this.subscribe.current.open();
  //   }
  // }

  render() {
    const { isHome = false } = this.props;
    return (
      <nav className={`${isHome ? HomeNavRaise : ''} ${SiteNavStyles}`}>
        <SiteNavLeft>
          {!isHome && <SiteNavLogo />}
          <ul className={`${NavStyles}`} role="menu">
            {/* TODO: mark current nav item - add class nav-current */}

            <li role="menuitem">
              <Link to="/">Our Wedding</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">Events</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">Travel</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">Accommodations</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">While You're Here</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">Nuggets</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">RSVP</Link>
            </li>
            <li role="menuitem">
              <Link to="/about">Registry</Link>
            </li>

          </ul>
        </SiteNavLeft>





        {/*<li role="menuitem">*/}
          {/*<Link to="/">Home</Link>*/}
        {/*</li>*/}
        {/*<li role="menuitem">*/}
          {/*<Link to="/about">About</Link>*/}
        {/*</li>*/}
        {/*<li role="menuitem">*/}
          {/*<Link to="/tags/getting-started/">Getting Started</Link>*/}
        {/*</li>*/}




        {/*<SiteNavRight>*/}
          {/*<SocialLinks>*/}
            {/*<a*/}
              {/*className={`${SocialLink}`}*/}
              {/*href={config.facebook}*/}
              {/*target="_blank"*/}
              {/*title="Facebook"*/}
              {/*rel="noopener noreferrer"*/}
            {/*>*/}
              {/*<Facebook />*/}
            {/*</a>*/}
            {/*<a*/}
              {/*className={`${SocialLink}`}*/}
              {/*href={config.twitter}*/}
              {/*title="Twitter"*/}
              {/*target="_blank"*/}
              {/*rel="noopener noreferrer"*/}
            {/*>*/}
              {/*<Twitter />*/}
            {/*</a>*/}
          {/*</SocialLinks>*/}
          {/*{config.showSubscribe && (*/}
            {/*<SubscribeButton onClick={this.openModal}>Subscribe</SubscribeButton>*/}
          {/*)}*/}
          {/*{config.showSubscribe && (*/}
            {/*<SubscribeModal ref={this.subscribe} />*/}
          {/*)}*/}
        {/*</SiteNavRight>*/}
      </nav>
    );
  }
}

export default SiteNav;


// const SiteNavRight = styled.div`
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   height: 40px;
//
//   @media (max-width: 700px) {
//     display: none;
//   }
// `;
//
// const SocialLinks = styled.div`
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   a:last-of-type {
//     padding-right: 20px;
//   }
// `;
//
// const SubscribeButton = styled.a`
//   display: block;
//   padding: 4px 10px;
//   border: #fff 1px solid;
//   color: #fff;
//   font-size: 1.2rem;
//   line-height: 1em;
//   border-radius: 10px;
//   opacity: 0.8;
//
//   :hover {
//     text-decoration: none;
//     opacity: 1;
//     cursor: pointer;
//   }
// `;
