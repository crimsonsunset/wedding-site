import styled, { css } from 'react-emotion';
import { colors, primaryColors, mediaQueries, margin } from '@styles/variables';
import { useSpring, animated } from 'react-spring';
import * as React from 'react';
import { Transition } from 'react-spring/renderprops-universal';

export const PostTemplate = css`
  .site-main {
    background: ${primaryColors.white} !important;
    padding-bottom: 4vw;
    //margin-top: 4vw;;

    // ${mediaQueries[0]}{
    //   margin-top: 200px !important;
    // }
    // ${mediaQueries[1]}{
    //   margin-top: 150px !important;
    // }
    // ${mediaQueries[2]}{
    //   margin-top: 120px !important;
    // }
    // ${mediaQueries[3]}{
    //   margin-top: 70px;
    // }
  }
`;

export const BottomPaddingPost = css`
    display: flex;
    flex-direction: column;
    padding-bottom: 6vh;
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
  padding: 6vh 0vw;
  max-width: 1060px;
  text-align: center;

  h2{
    font-size: 21px;
    font-weight: normal;
    font-family: 'Catamaran',sans-serif;

    div {
      //border:5px solid red;
      margin-top: 5px;
      width: 284px;
      display: flex;
      justify-content: space-between;
    }

  }

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
  color: ${colors.$navy};

  ${mediaQueries[3]}{
    margin-top: 60px !important;
  }

  ${mediaQueries[2]}{
    margin-top: initial !important;
  }

`;

export const PostFullImage = styled.figure`
  margin: ${margin.headerImage}
  //margin: 0 -10vw -165px;
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


// const items = [1, 2, 3, 4];
// export class Parent extends React.Component {
//
//   render() {
//
//     const FuncComp = (({ style, data }) => <h1 style={style}>{data}</h1>);
//
//     return (
//       <Transition
//         items={items} keys={(item) => item}
//         from={{
//           marginLeft: '0px',
//           marginTop: '100px',
//           position: 'absolute',
//           opacity: 0
//         }}
//         enter={{
//           marginTop: '0px',
//           marginLeft: '100px',
//           opacity: 1
//         }}>
//         {props => <FuncComp style={props} data={'JOE TEST ONE'} />}
//       </Transition>
//     )
//   }
// }
