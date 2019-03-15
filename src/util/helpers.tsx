// export function resizeIframe(obj:any) {
//   console.log('zzz', obj)
//   obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
// }

import { Spring } from 'react-spring/renderprops-universal';

export function getCurrentYear() {
  return new Date().getFullYear();
}
