import { css } from 'react-emotion';
export const navStyles = css`
  //border:5px solid red;
  margin-top: -30px;
  display: flex;
  position: absolute;
  bottom: 70px;
  width: 100%;
  
  ${mediaQueries[2]}{
    //border:5px solid red;
    bottom: 0;
  }
  
  ${mediaQueries[2]}{
  display: none;
  }
  
  ul{
    background: rgba(21,23,26,0.28);
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    
    
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
    
    margin: 0.5em 0;
    padding: 0;
    line-height: 1.6em;
    font-size: 2.6rem;
    text-align: center;
    //border: 1px solid red;
    width: 20%;
}
  }
  
  hr {
  
    border-top: 2px solid #F0AF01;
    transform: rotate(90deg);
    width: 30px;
    margin: 0;
    margin-top: 34px;
  }
  
  
`;

import { colors, mediaQueries } from '../../variables';