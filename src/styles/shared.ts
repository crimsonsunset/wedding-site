import { css } from 'emotion';
import styled from 'react-emotion';
import { darken, lighten } from 'polished';
import { colors, fonts, shadows, animations, primaryColors, mediaQueries } from './variables';

export const outer = css`
  //position: relative;
  //padding: 0 4vw;
`;

export const HEADER_PICTURE_WIDTH = '1364px';
// export const HEADER_PICTURE_WIDTH = '1394px';

// Centered content container blocks
export const inner = css`
  margin: 0 auto;
  max-width: 1060px;
  width: 100%;
`;

export const SiteMain = css`
  z-index: 100;
  flex-grow: 1;
`;

export const SiteTitle = styled.h1`
  ${shadows.text}
  z-index: 10;
  margin: 0;
  padding: 0;
  font-size: ${'11rem'};
  font-weight: 700;
  letter-spacing: 4px;
  color:${colors.$white};
  
  ${mediaQueries[0]}{
    font-size: ${'8.5rem'};
  }
  
`;

export const SiteDescription = styled.h2`
  ${shadows.text}
  ${animations.scaleHover(1.4, '.instagram-link')};
 
 transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  will-change: auto;
  z-index: 10;
  margin: 0;
  padding: 5px 0;
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  width: 100%;
  display: flex;
  justify-content: center;
    
  
  color:${colors.$white};
  
  a{
  font-family: Rancho;
  color:${colors.$white};
  }
  
`;

export const PostFeed = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 40px 0 0 0;  
`;

export const PostFeedRaise = css`
  @media (min-width: 900px) {
    margin-top: -70px;
    padding-top: 0;
  }
`;

export const SocialLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
  color: #fff;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  svg {
    height: 1.8rem;
    fill: #fff;
  }
`;

export const SiteHeader = css`
    
    //border:5px solid purple;
    //position: sticky;
    color: ${colors.$black};
    background: ${colors.$navy};
    background: ${colors.$darkGreen} no-repeat 100% 65%;
    background-size: cover;
    margin-bottom: 30px;
`;

export const SiteHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vw 0vw;
  min-height: 200px;
  max-height: 450px;
  text-align: center;
  
  .content-container{
    padding-bottom: 80px;
  
  }
  
`;

export const SiteHeaderStyles = css`
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: auto;
  left: 0;
  z-index: 10;
  display: block;
  height: 80px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));

  :before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: block;
    background: rgba(0, 0, 0, 0.18);
  }

  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: auto;
    left: 0;
    z-index: 10;
    display: block;
    height: 80px;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  }
  @media (max-width: 700px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const AuthorProfileImage = css`
  display: block;
  /* background: color(var(--lightgrey) l(+10%)); */
  background: ${lighten('0.1', primaryColors.lightgrey)};
  border-radius: 100%;
  object-fit: cover;
  margin-right: 15px;
  width: 60px;
  height: 60px;
`;
