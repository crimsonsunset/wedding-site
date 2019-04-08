import { Link } from 'gatsby';
import * as React from 'react';
import styled, { css } from 'react-emotion';
import { outer, inner } from '@styles/shared';
import config from '@root/website-config';
import { colors, primaryColors } from '@styles/variables';
import { getCurrentYear } from '@util/helpers';

const SiteFooter = css`
  position: relative;
  color: #fff;
  background: ${colors.$navy};
  padding: 20px 4vw;
`;


const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  a {
    color: rgba(255, 255, 255, 0.7);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const SiteFooterNav = styled.nav`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;
  }

  a:before {
    content: '';
    position: absolute;
    top: 11px;
    left: -11px;
    display: block;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 100%;
  }

  a:first-of-type:before {
    display: none;
  }
  @media (max-width: 650px) {
    a:first-child {
      margin-left: 0;
    }
  }
`;

const Footer: React.SFC = () => {
  return (
    <footer className={`${outer} ${SiteFooter}`}>
      <div className={`${inner} ${SiteFooterContent}`}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {getCurrentYear()}
          &nbsp;⎮&nbsp;
          <a
            rel="noreferrer"
            className='instagram-link'
            href={'https://www.instagram.com/explore/tags/twojsalways/'}
            target='_blank'
          >{'#twoJSalways'}</a>
        </section>
        <SiteFooterNav>

          {/*<Link to="/contact-us">Contact Us</Link>*/}

          <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            Made with ❤️ & GatsbyJS in 🗽
          </a>
        </SiteFooterNav>
      </div>
    </footer>
  );
};

export default Footer;
