// mpegts check (graceful fallback)
if (typeof mpegts === 'undefined') {
  console.log('mpegts is undefined; native video element will be used');
}
