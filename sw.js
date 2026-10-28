// Service Worker for StreamFlow IPTV PWA
const CACHE_NAME = 'streamflow-iptv-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let network handle media streams directly
  if (event.request.url.includes('.m3u8') || event.request.url.includes('.ts') || event.request.url.includes('.mp4')) {
    return;
  }
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
