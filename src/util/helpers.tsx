// export function resizeIframe(obj:any) {
//   console.log('zzz', obj)
//   obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
// }

import { Spring } from 'react-spring/renderprops-universal';
import { flow, camelCase, upperFirst, words } from 'lodash';

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function fileNameToCaption(str) {
  const wordArr = flow([camelCase, upperFirst, words])(str);
  return wordArr.join(' ');
}

