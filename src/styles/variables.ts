import { css } from 'emotion';

export const colors = {
  $darkGreen: '#1C3103',
  $midGreen: '#435711',
  $lightGreen: '#749957',
  $yellow: '#F0AF01',
  $orange: '#D27702',
  $navy: '#2F496E',
  $black: '#000000',
  $white: '#ffffff',

  blue: '#3eb0ef',
  green: '#a4d037',
  purple: '#ad26b4',
  yellow: '#fecd35',
  red: '#f05230',
  darkgrey: '#15171A',
  midgrey: '#738a94',
  lightgrey: '#c5d2d9',
  whitegrey: '#e5eff5',
  pink: '#fa3a57',
  brown: '#a3821a',

};

export const fonts = {
  $headingFont: `'Rancho', cursive`,
  $bodyFont: `'Roboto', sans-serif`,
};

export const shadows = {
  text: css`
    text-shadow: 0 0 2px #fff,  
    -1px -1px 0 rgb(67,87,17), 
    -2px -2px 1px rgb(67,87,17);
`,
};

export const padding = {
  main: '0 4vw',
};

export const animations = {
  scaleHover(scaleAmount: number) {
    return css`
      :hover {
        box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
        transition: all 0.4s ease;
        transform: translate3D(0, -1px, 0) scale(${scaleAmount});
      }`
  },
};

// var name = 'Brandon';
// var age = 26;
//
// function greet(arr, nameArg, ageArg) {
//   console.log(arr[0] + nameArg + arr[1] + ageArg + arr[2]);
// }

// greet`Woah, ${name} is ${age}?`;
// "Woah, Brandon is 26?"
