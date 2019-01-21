export function resizeIframe(obj) {
  console.log('zzz', obj)
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

