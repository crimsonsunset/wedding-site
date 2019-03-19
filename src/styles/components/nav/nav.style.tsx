import { css } from 'react-emotion';
import { colors, mediaQueries } from '@styles/variables';

export const navStyles = css`
  
  position: fixed;
  display: flex;
  z-index: 500;
  width: 100%;
  background: ${colors.$navy};
  flex-wrap: wrap;
  justify-content: center;
  
    // ${mediaQueries[2]}{
  //   //border:5px solid red;
  //   bottom: 0;
  // }
  
  ${mediaQueries[2]}{
    justify-content: center;
  }
  
  &.home{
  
  
    margin-top: -30px;
    display: flex;
    position: initial;
    bottom: 70px;
    margin: 0 auto;
    max-width: 1040px;
    margin-bottom: 4vh;
    background: initial;
    
    ${mediaQueries[2]}{
      margin-bottom: 0;
    }
    
  
    ul{
        
      background: rgba(21,23,26,0.28);
      border-radius: 7px;
      
        ${mediaQueries[2]}{
          flex-wrap: wrap;
        } 
    }
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
    flex-wrap: wrap;
    
    ${mediaQueries[2]}{
      justify-content: center;
    }
    
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
    padding: 0px 6px;
    line-height: 1.6em;
    font-size: 2.6rem;
    text-align: center;
    
    ${mediaQueries[2]}{
      margin: 0.1em;
    }
    
}
  }
  
  hr {
  
    border-top: 2px solid ${colors.$lightGreen};
    transform: rotate(90deg);
    width: 45px;
    margin: 0;
    margin-top: 34px;
    
    
    ${mediaQueries[0]}{
      width: 20px;
      visibility: hidden;
    }
    
    ${mediaQueries[2]}{
      margin-top: 20px;
      width: 30px;
    }
    
  }
  
  
`;
