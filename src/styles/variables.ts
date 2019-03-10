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
};

export const primaryColors = {
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
  inverseText: css`
    text-shadow: 0 0 2px #fff,  
    -1px -1px 0 rgb(0,0,0), 
    -2px -2px 1px rgb(0,0,0);
`,
};

export const padding = {
  main: '0 4vw',
};


export const animations = {
  scaleHover(scaleAmount: number, childSelector?: string) {
    const childPop = (!childSelector) ? '' :
      `
      ${childSelector}{
        transition: color 1s ease;
        color: ${colors.$yellow};
        }
      `;
    return css`
      :hover {
        //box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px, rgba(39, 44, 49, 0.04) 1px 6px 12px;
        transition: all 0.4s ease;
        transform: translate3D(0, -1px, 0) scale(${scaleAmount});
        ${childSelector && shadows.inverseText}
        
        ${childPop}        
       
      }`;
  },
};


const breakpoints = [500, 768, 899, 1170];
export const mediaQueries = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`,
);



// const [color1, color2] = sampleSize(values(colors), 2);
// console.log('colzz', color1);
// console.log('colzz', color2);

// var name = 'Brandon';
// var age = 26;
//
// function greet(arr, nameArg, ageArg) {
//   console.log(arr[0] + nameArg + arr[1] + ageArg + arr[2]);
// }

// greet`Woah, ${name} is ${age}?`;
// "Woah, Brandon is 26?"




// @import url('https://fonts.googleapis.com/css?family=Rancho');
// @import url('https://fonts.googleapis.com/css?family=Catamaran');
//
//
// html{
//   font-family: 'Catamaran', sans-serif;
// }
//
// .footer_placeholder{
//   display: none;
// }
//
// .footer_logo, header{
//   display: none;
// }
//
//
// .content_wrap{
//   background-color: transparent;
//   text-align: center;
//
//   margin-top: 2vh;
//   /* margin-bottom: 18vh; */
//   /* padding-bottom: 140px; */
//   /* height: 100vh; */
//
//
// }
//
// h2{
//   font-family: 'Rancho', cursive;
//   font-size: 55px;
//   color: #435711;
// }
//
// h3{
//   font-family: 'Catamaran', sans-serif;
//   font-size: 22px !important;
//   color: #2F496E !important;
// }
//
// label, input{
//
//   font-family: 'Catamaran', sans-serif !important;
//   font-size: 16px !important;
//   color: #2F496E !important;
// }
//
// .form-group{
//   margin-top: 25px;
// }
//
// a{
//   font-family: 'Catamaran', sans-serif;
//   font-size: 20px !important;
// }
//
// .guest_list_step1-next{
//   font-family: 'Catamaran', sans-serif !important;
// }
//
// .step1{
//   padding-bottom: 30px;
// }
//
//
// .step2{
//   padding-bottom: 30px;
// }
//
// .step2 p {
//
//   font-family: 'Catamaran', sans-serif !important;
//   font-size: 18px !important;
//   color: #2F496E !important;
// }
//
// .step2 .btn-primary, .btn-default{
//   font-family: 'Catamaran', sans-serif !important;
//
// }
//
// .step1_form{
//   font-family: 'Catamaran', sans-serif !important;
// }
//
// .step1_form h2 {
//   font-family: 'Rancho', cursive;
//   font-size: 40px;
//   color: #435711;
// }
//
// .step1_form .no_padding_step3 {
//   font-family: 'Catamaran', sans-serif !important;
//   font-size: 19px;
//   color: #2F496E;
//   width: 100%;
//
// }
//
// .step1_form .text-left {
//   font-size: 16px;
//   color: #435711;
//   text-align: center;
// }
//
// .step1_form .btn-primary, .btn-default{
//   font-family: 'Catamaran', sans-serif !important;
// }
//
// .step2-next{
//   font-family: 'Catamaran', sans-serif !important;
// }
//
// .pull-right b{
//   font-family: 'Catamaran', sans-serif !important;
// }
//
// .alert{
//   font-family: 'Catamaran', sans-serif !important;
//   font-size: 17px;
//   padding: 2;
//   width: 100%;
// }
//
// .no_padding_step3{
//   margin-top: 25px;
// }
//
// .step3-next{
//   font-family: 'Catamaran', sans-serif !important;
// }
//
// .step3_buttons_spacing b {
//   font-family: 'Catamaran', sans-serif !important;
// }
//
// .confirmation-page .confirmation-page-content{
//   font-family: 'Catamaran', sans-serif !important;
// }
//
//
// .confirmation-page-content .row .qr-code-container{
//   display: none !important;
// }
//
// .confirmation-page-content .row .col-md-9{
//   width: 100% !important;
//   right: 0% !important;
// }
//
// .confirmation-page-description{
//   font-family: 'Catamaran', sans-serif !important;
// }
//
// .confirmation-page-sidebar-wrapper a {
//   font-family: 'Catamaran', sans-serif !important;
// }
//
// .confirmation-page-block-text p{
//   font-family: 'Catamaran', sans-serif !important;
// }




