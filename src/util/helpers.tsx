// export function resizeIframe(obj:any) {
//   console.log('zzz', obj)
//   obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
// }

import { Spring } from 'react-spring/renderprops-universal';
import { flow, camelCase, upperFirst, words, get, forEach, set } from 'lodash';

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function fileNameToCaption(str) {
  const wordArr = flow([camelCase, upperFirst, words])(str);
  return wordArr.join(' ');
}

export function getWindowVariable(propertyPath: string) {
  const possWindow = typeof window !== 'undefined' && window;
  return get(possWindow, propertyPath);
}

export function setWindowVariable(key: string, value: any) {
  const possWindow = typeof window !== 'undefined' && window;
  possWindow && set(possWindow, [key], value);
}

function gcd(a, b) {
  return (b === 0) ? a : gcd(b, a % b);
}

export function getAspectRatio(width,height){
  const gcd1 = gcd (width, height);
  const widthNum = width / gcd1;
  const heightNum = height / gcd1;
  return {
    widthNum,
    heightNum,
    type: (widthNum > heightNum) ? 'landscape' : 'portrait',
    aspectRatio: `${width / gcd1}:${height / gcd1}`,
  };
}


export function redirectComponent(url: string) {
  return () => {
    typeof window !== 'undefined' && window.location.replace(url);
    return null;
  };
}

export function printBuildInfo(buildInfo: any) {

  // only print 1x
  if (getWindowVariable('buildIsStamped')) {
    return;
  }

  forEach(buildInfo, (e, i) => {
    buildInfo[i] = e.replace(/\"/g, '');
  });

  const { name, version, environment, date } = buildInfo;
  const env = (process.env.IS_DEV) ? 'dev' : 'prod';
  let red = `${words(name).join(' ')} | v${version} | ${environment}`;
  let blue = 'Built at: ' + date;
  let green = 'Backend ENV is: ' + env;

  // stamp build
  console.log('%c' + red, 'color:red;');
  console.log('%c' + blue, 'color:blue;');
  console.log('%c' + green, 'color:green;');

  setWindowVariable('buildIsStamped', true);

}


