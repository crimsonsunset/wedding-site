export function resizeIframe(obj:any) {
  console.log('zzz', obj)
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

