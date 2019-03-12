importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03b6e2517620273bdf69.js",
    "revision": "ca1d2c95b3970f0e1f1e3e8e53de7579"
  },
  {
    "url": "/_nuxt/5d7b690c26bf51f7833d.js",
    "revision": "96bda286dead1ee21ac46019cf9dc852"
  },
  {
    "url": "/_nuxt/9322f39fccb6310d2ca8.js",
    "revision": "4f0c72babe94d1914c9ccd96de7a760d"
  },
  {
    "url": "/_nuxt/b80c4406ff67944f985e.js",
    "revision": "e267d6bc0306d51b7bfc36df7d93996d"
  }
], {
  "cacheId": "fdornak.gitlab.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
