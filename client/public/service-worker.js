console.log("Hello from your service worker!");

const FILES_TO_CACHE = [
    "/",
    "/offline.html",
    "/index.html",
    "../src/lib/css/styles.css",
    "../src/httpClient.js",
    "../src/Components/App.js",
    "../src/Components/Contact.js",
    "../src/Components/ContactsDisplay.js",
    "../src/Components/Filter.js",
    "../src/Components/Footer.js",
    "../src/Components/Home.js",
    "../src/Components/HomeHeader.js",
    "../src/Components/Login.js",
    "../src/Components/LogOut.js",
    "../src/Components/NavBar.js",
    "../src/Components/ProductCard.js",
    "../src/Components/Products.js",
    "../src/Components/SignUp.js",
];

const CACHE_NAME = 'static-cache-v2';
const DATA_CACHE_NAME = 'data-cache-v1';

// Install and Register Service Worker
self.addEventListener('install', function(evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Your files were pre-cached successfully!');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', function(evt) {
    evt.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('Removing old cache data', key);
                        return caches.delete(key);
                    }
                })
            )
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
    if (evt.request.url.includes('/api/')) {
        console.log('[Service Worker] Fetch (data)', evt.request.url);
        evt.respondWith(
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch(evt.request)
                    .then(response => {
                        if (response.status === 200) {
                            cache.put(evt.request.url, response.clone());
                        }
                        return response;
                    })
                    .catch(err => {
                        return cache.match(evt.request);
                    });
            })
        );
        return;
    }
    evt.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(evt.request).then(response => {
                return response || fetch(evt.request);
            });
        })
    );
    return;
});