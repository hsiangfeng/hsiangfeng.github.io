const VERSION = 'ray-blog-v1'
const CORE = [
  '/offline.html',
  '/manifest.webmanifest',
  '/images/logo-mark.png',
  '/images/android/192x192.png',
  '/images/android/512x512.png',
]
self.addEventListener('install', event => event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())))
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim())))
self.addEventListener('fetch', event => {
  const request = event.request
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return
  const url = new URL(request.url)
  if (request.mode === 'navigate' || url.pathname.startsWith('/_payload.json')) {
    event.respondWith(fetch(request).catch(() => caches.match(request).then(response => response || caches.match('/offline.html'))))
    return
  }
  if (url.pathname.startsWith('/_nuxt/') || url.pathname.startsWith('/images/')) {
    event.respondWith(caches.match(request).then(cached => {
      const fresh = fetch(request).then(response => { if (response.ok) caches.open(VERSION).then(cache => cache.put(request, response.clone())); return response })
      return cached || fresh
    }))
  }
})
