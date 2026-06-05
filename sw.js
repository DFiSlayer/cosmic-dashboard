// ✦ Cosmic Dashboard — Service Worker v3.0
var CACHE = 'cosmic-v5';
var CORE = ['./index.html', './manifest.json'];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache){
      return cache.addAll(CORE).catch(function(){});
    }).then(function(){return self.skipWaiting();})
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
    }).then(function(){return self.clients.claim();})
  );
});

self.addEventListener('fetch', function(e) {
  var url = e.request.url;
  // Always network for geocoding and fonts
  if(url.includes('nominatim.openstreetmap.org')||url.includes('fonts.googleapis.com')){
    e.respondWith(fetch(e.request).catch(function(){return new Response('',{status:503});}));
    return;
  }
  // Cache-first for everything else
  e.respondWith(
    caches.match(e.request).then(function(cached){
      if(cached)return cached;
      return fetch(e.request).then(function(response){
        if(e.request.method==='GET'&&response.status===200){
          var clone=response.clone();
          caches.open(CACHE).then(function(cache){cache.put(e.request,clone);});
        }
        return response;
      }).catch(function(){return caches.match('./index.html');});
    })
  );
});
