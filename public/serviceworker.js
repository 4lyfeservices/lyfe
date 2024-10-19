importScripts('/dist/bundle.js?v=4');
importScripts('/dist/config.js?v=4');
importScripts(__cv$config.sw || '/dist/sw.js?v=4');
const cv = new CVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener('fetch', (event) => {
    event.respondWith(
      (async function () {
  
        if (event.request.url.startsWith(location.origin + '/network/')) {
          return await cv.fetch(event)
        }
  
        return await fetch(event.request)
      })()
    )
  })