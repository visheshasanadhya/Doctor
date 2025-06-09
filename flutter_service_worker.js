'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d3c8f64f0902db97e294d74fd26453ff",
"assets/AssetManifest.bin.json": "0881ba7f0c44dbae1a2cfdf1f9fa29e0",
"assets/AssetManifest.json": "66bf119438928156b13654b20bb1c94d",
"assets/assets/icons/address.svg": "565106c69b958107fa05cb819e655dbe",
"assets/assets/icons/bg.svg": "2d5d7ca8881356da54bf5fc6396e4d1f",
"assets/assets/icons/Call.svg": "a14629eb7b9c08720738adbf39fdd57c",
"assets/assets/icons/Call_box.svg": "053c17f688c321ddb71d8ad59f3cf341",
"assets/assets/icons/Cardiologist.svg": "c30dd7760d1657d92579acaad9df256b",
"assets/assets/icons/Chat.svg": "7764a7b77d51c24230974006c3a3faff",
"assets/assets/icons/Chat_box.svg": "3bea812077455fff1304113732ca06dd",
"assets/assets/icons/Clock.svg": "af23b6674d3b48800849cd8313e74aa2",
"assets/assets/icons/edit.svg": "cfd8380ece934e44589a194022f857bf",
"assets/assets/icons/event.svg": "6602e6c112bdb7959c6e0bea188827f5",
"assets/assets/icons/gerda_logo.svg": "c507c4d37592b4aa5df07ce32bf5b1b3",
"assets/assets/icons/home.svg": "c514b808ee3eab7f251568234fd4cc8f",
"assets/assets/icons/location_pin.svg": "ff2e1967290f853db79f21ee7689b97d",
"assets/assets/icons/Menu.svg": "1af589376561906c7ea8d3a35f9e2908",
"assets/assets/icons/Neurosurgeon.svg": "7607437f06cd6b1a8c7a8ac52529db20",
"assets/assets/icons/notifications.svg": "eee27d9936603109affca4f7494dfb22",
"assets/assets/icons/Notificatio_box.svg": "ffbe7212b0de5223e47ade47cf62b570",
"assets/assets/icons/Pediatrician.svg": "ffe0d551122ef57966716153a3a80dc2",
"assets/assets/icons/Psychiatrist.svg": "c6f0a3beea445a752b0a2acd0c65140b",
"assets/assets/icons/Serach.svg": "0057473f7919a5b209c66dc1e4710be5",
"assets/assets/icons/splash_bg.svg": "bbe178f2f55024e0abf1ae6f41f73932",
"assets/assets/icons/star.svg": "d19d9deb3b5f6c50abb4d6004628595e",
"assets/assets/icons/stethoscope.svg": "96364f38d0152a447f04e2c53f66fccc",
"assets/assets/icons/Video.svg": "16f5923bc6ff80a0264d5acb8a9104be",
"assets/assets/icons/Video_box.svg": "fbd8799fc430c5a15e02c7b495d682ab",
"assets/assets/images/Asma_Khan.png": "604bb0886bb771b2149fe7e6e89675d3",
"assets/assets/images/doctor_big_preview.png": "8dae046f2a2e8d41d16e9a8fb13fc1b1",
"assets/assets/images/Dr.%2520Kiran%2520Shakia.png": "c2c1b50bae6f5ea4f0ee0911f698de17",
"assets/assets/images/Johir_Raihan.png": "93ed4a91c445cf56ff6ce6509f345c9d",
"assets/assets/images/Kiran_Shakia.png": "c2c1b50bae6f5ea4f0ee0911f698de17",
"assets/assets/images/Masuda_Khan.png": "f029f60ce6f904851d2fc4f2af12836e",
"assets/assets/images/Salina_Zaman.png": "faa2f625f833e0712197405ac5575b2f",
"assets/assets/images/search_doc_1.png": "e2d82253ef8c28c418d9ed58b3716884",
"assets/assets/images/search_doc_2.png": "61194e42304a9d4b4f8d2362864c9917",
"assets/assets/images/search_doc_3.png": "10ee2ad6cc8539dd0372266fb1152310",
"assets/assets/images/search_doc_4.png": "7703c63dd6070a09710df8a0a7ae716e",
"assets/assets/images/Serena_Gome.png": "d397911bc323411bcb7a61726a9103eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c81dd2c611a8b6853bcee44c2ccc0902",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "c193fb39b9b07985f33c30368992d522",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "64c637dff4c6985e3165baefbb75b8b8",
"/": "64c637dff4c6985e3165baefbb75b8b8",
"main.dart.js": "03191b70de040c431da9ce5e18e45a34",
"manifest.json": "3fd54bb6819d6045ca3ed18f42419469",
"version.json": "5ef0031cb4c07c533cedfd4ca71a7a57"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
