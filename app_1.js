// Hls check (graceful fallback)
if (typeof Hls === 'undefined') {
  console.log('Hls is undefined; native video element will be used');
}
