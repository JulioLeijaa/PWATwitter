var url = window.location.href;
var swFile = '';

if (navigator.serviceWorker) {
    if (url.includes('localhost'))
        swFile = '/sw.js';

    navigator.serviceWorker.register(swFile);
}

// const CACHE_NAME = 'cache-1';
// const CACHE_DYNAMIC = 'dynamic-1';
// const CACHE_INMUTABLE = 'inmutable-1';
// const APP_SHELL = [
//     '/',
//     'index.html',
//     'css/style.css',
//     'images/planet-earth.png',
//     'js/app.js',
//     'images/avs/carl.jpg',
//     'images/avs/doug.jpg',
//     'images/avs/russel.jpg'
// ];
// const APP_INMUTABLE = [
//     'https://fonts.googleapis.com/css?family=Quicksand:300,400',
//     'https://fonts.googleapis.com/css?family=Lato:400,300',
//     'https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css',
//     'js/libs/jquery-3.6.0.min.js'
// ];

// self.addEventListener('install', event => {
//     const cacheApp = caches.open(CACHE_NAME)
//         .then(cache => {
//             cache.addAll(APP_SHELL);
//         });

//     const cacheInmutable = caches.open(CACHE_INMUTABLE)
//         .then(cache => {
//             cache.addAll(APP_INMUTABLE);
//         });

//     event.waitUntil(Promise.all([cacheApp, cacheInmutable]));
// });

// self.addEventListener('activate', event => {

// });