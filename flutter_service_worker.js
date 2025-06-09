'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "89c2e12aa5136ab1c8dc54afd42c91ce",
".git/config": "801e8cd7ff07d876df3e4cfce8cd0e84",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b7efba54b73f03958fb7b2a4e0d06340",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff6ab19f6cfe303959d16c27b50e0ecf",
".git/logs/refs/heads/gh-pages": "ff6ab19f6cfe303959d16c27b50e0ecf",
".git/logs/refs/remotes/origin/gh-pages": "0988a850bd450da2846e7a354177818c",
".git/objects/04/f5af0d68d42c0f550ceb5f68a7db0827d3e50e": "5d0a6245817973ddce7485adead8e01a",
".git/objects/07/7c535ef1664737029023bf525b47cb73182e80": "681d8c227570eea3960df994046bac27",
".git/objects/07/bdb3144b3d13832862c70cafe48ddc13119802": "fca2b6d5f5e49f2e0eb34e0aed1d190d",
".git/objects/09/76136267309cc69769c4d79399ebb660b1051e": "f625d9ae1a00cebafd08f073ea666e65",
".git/objects/0a/e441483f760dbaecfb41c475eed9146af193a8": "13ee6df257ad4d99f6fc4d44fe976dfd",
".git/objects/11/c67f5ce63ef4f6a41aebfd291ffad52660c5cb": "b2098e9875743685844f5ecb58a5d40d",
".git/objects/1a/2cdcb66f98a76ab877a108ddd6e743dde8f524": "91b2bb2571a39e04a29fe84dd002795a",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/fd87b1161d80c4b227c11ac9d64a97a1f3ff50": "3da06e4bd7abd48cd55217dc96e881f1",
".git/objects/22/2298a1b409ac25ae5f15f418b2c0ceb8531aa3": "a914bf77fd04c5b04b6189a0d5df3bf3",
".git/objects/22/41c7f9763a8b8b34ebbf9b7bd4113373ca396d": "981670e467210d7bbe4c6e8cc5015a0e",
".git/objects/29/c7d07d14ee8f2cce789bbb0d0c4cad38d202af": "84da1ab13a5b87720fa9d625fd64fd1b",
".git/objects/2d/19eed2b3a41e001480e4407d5cccfc8cd08a20": "f38788d52e0744df3466231293377573",
".git/objects/2d/864232a4993b0bbdd54a25e1363e50dd8bc5c3": "8242bc15f4f65626ca279f4625cdb8c6",
".git/objects/38/2f408d393d3bb9b1f98ed915efc3d81e05df12": "5a1042e08f91710c8d07406fecce8fd8",
".git/objects/3d/216d45ddbb6247d510712e7b53d4a84a73ab5e": "755299b670e907652abd8ca9575d5455",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/54cf6068fafd7f560cc2af3ae4664d8a47639c": "a7e648435f58bfb9b61346d6989a4ec2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/e9cde6f0b9677a2c9fa27c56e6ce097517be32": "51c8a9fdb543b21b5455f14c8befc991",
".git/objects/4a/9003aedbc829a56037d18abe1541c3df6ba4fd": "e3ae4d4ef21bc464ca3ee5daac1b9410",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/56/9dd0d1729e446cabba90478a0b5d6dfe3df0b1": "92b95aac3a9b827898840916fec43917",
".git/objects/57/c9295ce0b2fedf0d140fadf1893a16c2136baa": "4c675cfe8911714b615a3571e5c8719a",
".git/objects/58/71d8e2b693d52e580702d3430d619ec17d3f41": "8ed159ae1788d4f930e6d8cf5fe7209a",
".git/objects/59/462a7c0542b5300f867b982011d463f1108a26": "dabf2b98dd59563af8f0318c3416cedd",
".git/objects/5e/8cef036af6aefb8ca73dd835d274b78d1f3d2d": "741306513aecf6d0bc175646f3ab356e",
".git/objects/67/40d302ee0da628a3210d4f11714ec213a09191": "4e6fe027d87d71bf57fecf727f1c7baa",
".git/objects/6b/68c56df85b393ddbbb60da59ae49652fa9c1a8": "eaf21948b067f19b2ad2665aa896c796",
".git/objects/6c/aa97e4d9d3f7497e2d190e38270aefbb0b1b01": "4277fb50ac83c808dc90f0648ab1c4e4",
".git/objects/6d/1f3c0b028d3b3adb10e91698f071f4ee580c01": "d8cddc953c77135824c1c6254c9c617d",
".git/objects/70/352589fc12246367c93f2e59b1303da2854fc3": "1f870c87fb237be09a4e7020aa359ebb",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/d15727d283b50940d28cf7fdf37f5d00faf944": "6fe8f3333eaffc11f5e1f4bec3a32ef5",
".git/objects/72/e51b607bab69669ce56d3207a4bed0cdfa80e9": "33e06363002d65f7b1e535cdddfd67e4",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/6bdb601530d57daf44143816cb33c6b2fd3349": "ee835818fb810174f14a1b4c520735ba",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/b323f5b4a490dbd3cf18cb5aee69a9eb792e60": "24b6162ca79c6f8579614eb38887093c",
".git/objects/87/2891bbee3829dcedb0b200b9893b85eb921613": "530668109242729f4c382d905176b4fb",
".git/objects/87/f9c7bb980e58bc37e8554d5bcb699956b51b1a": "540ae6acdd8c907f75301d8409711f2f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/91/4ddb171a02a78e316a9d4a26072bd1cf46c952": "0b0a1f57218d7520d4c899789ff1cbef",
".git/objects/93/60a1c205715a85d05295cf5f32700bf8b252cd": "1fb5e105708fd1acab62ed257a5f5e84",
".git/objects/93/f4a74f2c5e8c130d279237732ced47cc970927": "9c3381269a71709f59cab13a4dbc205c",
".git/objects/96/79fe6ec56b14068e28f32751623ea02660d3d9": "8857f29a27acb203844ce71e26bd250a",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/ab2f5bdbde1fad8b879a73d4486f9ea8920930": "b666c94f4551aa637c83dbb069c8d0e0",
".git/objects/a0/368f5047a042fe5e60f7e6c8cf3a31715bad78": "5a3ea88ac837545d7e2b100815d899fa",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/f584e2ed2e2fc7770fbcb295ab45d8c9918cdf": "8f64875f27f51e34d2c03980d8cdfa56",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/1d5f7689738ccafac822a10c4cde284da0f427": "34950a93972aa17dc44225cf78e308e1",
".git/objects/af/0b04ee2dc7c77125d498979256cfd2fd1e6c91": "743ffee1bb59464238379d8c6000ddc0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ec885f57452c23a2a4700a484cb75e9f6b196f": "0af47ba9906302870e07d26ff9a4ccf0",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/266dfde195d55d27bad4c96652b330f72db055": "1c0aa2d9aaeaf28af67fff1716f50d3f",
".git/objects/bc/255532ac3c3384c268f51e8140f1add2d65296": "0fa5345f2ef92bd2e79ecac18503e83d",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/41be60cf21440e2a4bbfcc82f38b4ac50b7736": "42ed4c1a84767ff28fb4ac806b79fce4",
".git/objects/d0/febd387465ae71a7bc9764ceee89f1d74d191a": "e53c251cd5d6ad687c20b6ac54a3280a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/9862bd19436eecbfdea42068bea31e62ee4d0d": "f83a874045e4cbc8be2946ab50b55285",
".git/objects/da/11f6f5bf582388f1b4eeba9b1063e84068ae1e": "56f3550e97cd74a3c20bf4e30ae8231b",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/07db108623a52a206e8507e90b026ca755ebb0": "39319c95410d8e029b72a9e83c10658c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/d49c8951ae9ce4b04f47744464bcdde3358501": "15c1d63bd199d24ca7bc9f53462f1312",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/c03cc0e1285721b3b7e0c1bd1e1a7bdbbc82da": "cbb4dd9f7b0c6a458cfd75e3ef9d3776",
".git/refs/heads/gh-pages": "4c36371dd53861790675dfd4253aa500",
".git/refs/remotes/origin/gh-pages": "4c36371dd53861790675dfd4253aa500",
"assets/AssetManifest.bin": "d3c8f64f0902db97e294d74fd26453ff",
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
"flutter_bootstrap.js": "94a9d8e0b3e558b1f67136850566c7bc",
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
