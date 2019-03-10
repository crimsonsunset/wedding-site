import { css } from 'react-emotion';
import { colors, mediaQueries } from '@styles/variables';

export const navStyles = css`
  
  &.home{
  
  
    margin-top: -30px;
    display: flex;
    position: initial;
    bottom: 70px;
    margin: 0 auto;
    max-width: 1040px;
    margin-bottom: 4vh;
    background: initial;
  
  ul{
      
    background: rgba(21,23,26,0.28);
    border-radius: 7px;
  }
  
  }
  
  
  position: fixed;
  display: flex;
  z-index: 500;
  width: 100%;
  background: ${colors.$navy};
    
  
  ${mediaQueries[2]}{
    //border:5px solid red;
    bottom: 0;
  }
  
  ${mediaQueries[2]}{
  display: none;
  }
  
  img{
    
    transform: scale(0.7);
    margin: 0.5rem;
  }
  
  ul{
    
    display: flex;
    list-style-type: none;
    width: 100%;
    padding: 0;
    max-width: 1040px;
    margin: 0 auto;
    justify-content: space-around;
    
    //todo: for smaller nav?
    //border: 1px solid orange;
    //max-width: 760px;
    //margin: 0 auto;
    
    a {
      color: white;
      text-transform: capitalize;
      font-family: 'capriola';
    }
    
  }
  
  li{
    margin-top: 15px;
    margin: 0.5em 0;
    padding: 0;
    line-height: 1.6em;
    font-size: 2.6rem;
    text-align: center;
    width: 20%;
}
  }
  
  hr {
  
    border-top: 2px solid #F0AF01;
    transform: rotate(90deg);
    width: 45px;
    margin: 0;
    margin-top: 34px;
  }
  
  
`;
