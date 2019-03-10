import styled, { css } from 'react-emotion';
import { colors, primaryColors } from '@styles/variables';

export const PostTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

export const PostFull = css`
  position: relative;
  z-index: 50;
`;

export const NoImage = css`
  .post-full-content {
    padding-top: 0;
  }

  .post-full-content:before,
  .post-full-content:after {
    display: none;
  }
`;

export const PostFullHeader = styled.header`
  margin: 0 auto;
  padding: 6vw 3vw 3vw;
  max-width: 1040px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 14vw 3vw 10vw;
    
    
    .back-arrow{
    
    margin-top: -4vh;
    a {
          font-size: 18px !important;
    }
  }
    
  }
  
  .back-arrow{
    display: flex; 
    a {
      font-size: 22px;
    }
  }
  
`;

export const PostFullMeta = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryColors.midgrey};
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 1.2rem;
    line-height: 1.3em;
  }
`;

export const PostFullMetaDate = styled.time`
  color: ${primaryColors.blue};
`;

export const PostFullTitle = styled.h1`
  margin: 0;
  font-size: 8rem;
  color: ${primaryColors.blue};
  @media (max-width: 500px) {
    font-size: 2.9rem;
  }
`;

export const PostFullImage = styled.figure`
  margin: 0 -10vw -165px;
  height: 800px;
  background: ${primaryColors.lightgrey} center center;
  background-size: cover;
  border-radius: 5px;

  @media (max-width: 1170px) {
    margin: 0 -4vw -100px;
    height: 600px;
    border-radius: 0;
  }

  @media (max-width: 800px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    margin-bottom: 4vw;
    height: 350px;
  }
`;

export const DateDivider = styled.span`
  display: inline-block;
  margin: 0 6px 1px;
`;

export const ReadNextFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 40px 0 0 0;
`;
