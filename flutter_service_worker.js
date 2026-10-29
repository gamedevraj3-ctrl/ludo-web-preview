'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3b70178f7c15b3abde1d5255c32ac596",
"assets/AssetManifest.bin.json": "586d1947f274a2b45b7c63fa76f5dac7",
"assets/AssetManifest.json": "b1093cc372fc8c4ef21fc37f863a470b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "733f4bfd2ac7cc89279803a0d7360aa4",
"assets/assets/characters/A-Patroa.png": "e03b458d352605413dbc82d26053cff4",
"assets/assets/characters/A124.png": "43e28449e831c4dc521fef7a3cd9a991",
"assets/assets/characters/AberrantAphrodite.png": "f8476b3b8da53b63a1449aa5da255c11",
"assets/assets/characters/Adam.png": "b505582eee9fa29470955c10da900a4a",
"assets/assets/characters/Alok.png": "eb5c9650ae92a6aa921c7bd28a7da7a4",
"assets/assets/characters/Alvaro.png": "2d045f9bea0e2f10cc50fc954b3cd7b1",
"assets/assets/characters/Andrew.png": "1d85fa76be65f342afe4f7271bdf640b",
"assets/assets/characters/Antonio.png": "6a0ee38681cbea9c50ffcf1424943214",
"assets/assets/characters/Batman.png": "6d71a44ef3a63b9da00992dfb43f9660",
"assets/assets/characters/BlackWidow.png": "d4a2712b2b6548b6335955df269c1650",
"assets/assets/characters/CaptainAmerica.png": "afa348dceff98a588b0f5be8bacd9a7d",
"assets/assets/characters/CaptainMarvel.png": "bf35969d70918231c32ecbb6f7bd26ea",
"assets/assets/characters/Caroline.png": "d7671844ad988683af4d37a048db0147",
"assets/assets/characters/Chrono.png": "fc0779b8444aadcd15e2fd7bf403c4bc",
"assets/assets/characters/Cla.png": "032e8f22a5413110b57c64b4ccd9d278",
"assets/assets/characters/Clu.png": "f5d501c3af8d9cf69d1c20e90d945b56",
"assets/assets/characters/D-Bee.png": "1f31a9164842de9d7bc9aae2032b5d0b",
"assets/assets/characters/Dasha.png": "820310b2525e92ddf56020b41cc0f36f",
"assets/assets/characters/Deadpool.png": "58bcd55f05c15ab97fd452402008b38d",
"assets/assets/characters/DhruvRathi.png": "abb4e8784cc2cbefed28c1d8fcd1c657",
"assets/assets/characters/Dimitri.png": "a48fbe6fa28c65a45375f0b00defd11e",
"assets/assets/characters/DoctorDoom.png": "cc145b34b63b6482066a61bd15c415ed",
"assets/assets/characters/DoctorStrange.png": "8b9e6f779944fc12a3f647f6e929e6f4",
"assets/assets/characters/Ford.png": "1ca7f0e6eae8e6c9f35efeac5dfdcc3d",
"assets/assets/characters/Gadkari.png": "a1c85cb36e9e75679ed9af57bb04a1bb",
"assets/assets/characters/Hashirama.png": "2bca1538e7f49941b87bbc1804402da3",
"assets/assets/characters/Hayato.png": "7069a4806e689e9659ac0384dd39937a",
"assets/assets/characters/Homer.png": "cd0cf2b134d4384ad0faa0a023d83f7b",
"assets/assets/characters/Ignis.png": "61db1b1bbeb49cbfd448fa6d61771203",
"assets/assets/characters/Iris.png": "f1e276a41d8954d23c0195755cb641e2",
"assets/assets/characters/IronMan.png": "7408d995977d44393e085c68dba0fd16",
"assets/assets/characters/Itachi.png": "4601188f4d1447ee6287048b91dedecb",
"assets/assets/characters/Jiraiya.png": "be22247dace4000bfbea32537994bf10",
"assets/assets/characters/Joseph.png": "cba2aa5d8a32160467f867a975b96d2f",
"assets/assets/characters/Jota.png": "4f3028deee0689204de1193f2c0728b3",
"assets/assets/characters/K.png": "56f6924b751e6bc21ade52c388cb9a35",
"assets/assets/characters/Kakashi.png": "597e2f2666e1d86c928859b700b181d4",
"assets/assets/characters/Kapella.png": "7351fcb7a34c2b984063ca5012edcb87",
"assets/assets/characters/Kassie.png": "5139023fde420da62423b43138527d19",
"assets/assets/characters/Kelly.png": "3c3e7410f6052356509e700cb1230ff9",
"assets/assets/characters/Kenta.png": "57679e6df82fd35c8f3cdf21b5691798",
"assets/assets/characters/Kiaros.png": "7d00ea94782e9f0e9e14ad50448601c3",
"assets/assets/characters/KimJongUn.png": "fc7306d138aad3ebdf42652392347e2b",
"assets/assets/characters/Koda.png": "dec41a7c0f834978cb5c28be144d221e",
"assets/assets/characters/L.png": "99ffcee0585c52b3d08e379749fb2732",
"assets/assets/characters/Laura.png": "65b5166569faedd148c94a5cbc027c8f",
"assets/assets/characters/Leon.png": "a404fc8022db49a2b892d92984a9f7d3",
"assets/assets/characters/LightYagami.png": "6c2e7a0232cd9492f20811479b05a5a4",
"assets/assets/characters/Lila.png": "009f24b73d34cdf60624da86d35a9f35",
"assets/assets/characters/Loki.png": "7e1fa7dacda8cb50e5eabd19c1420c34",
"assets/assets/characters/Luna.png": "966b3794034b51ff0281114aef8be062",
"assets/assets/characters/Luqueta.png": "976af8f5f86c1a2cf9483ceda9289079",
"assets/assets/characters/Madara.png": "a2906aacc1f1b9a278579563fc45160e",
"assets/assets/characters/Maro.png": "7809c6def400e9e3154336f93ace98aa",
"assets/assets/characters/Maxim.png": "fb191654552fcf8e9c10bc3754119f79",
"assets/assets/characters/Meloni.png": "69849c4688359f42309712eb5f41cb5d",
"assets/assets/characters/Miguel.png": "3156a6aa891d61513b73abae0044c1f9",
"assets/assets/characters/Minato.png": "2ab989dcaf148a2ead4e3fc04c8f9175",
"assets/assets/characters/Misha.png": "810be32a277f70e3e46effc66d3e57cd",
"assets/assets/characters/Moco.png": "527f5b8a8b0f479c91cb6912ecf7389b",
"assets/assets/characters/Modi.png": "4a70ca4994ac619c3614e99433098cfa",
"assets/assets/characters/Morse.png": "9dc1942f0910b03868bd87f4605503fe",
"assets/assets/characters/Mysterio.png": "d58e318640140fee7fe27b34eccb9741",
"assets/assets/characters/Nairi.png": "993473e360af1fbc3c0366cad8aa152b",
"assets/assets/characters/Naruto.png": "ee41fff81fb646a1bda077e7f39f5ae3",
"assets/assets/characters/NarutoKid.png": "69549774587a3f5827708e7425e38829",
"assets/assets/characters/Nero.png": "5d545991e4d20c0d07d8b4194f14d879",
"assets/assets/characters/Nikita.png": "48ef06c59adeb9667e11bbd40b00c7a7",
"assets/assets/characters/Notora.png": "bab49bc8b74e678fe4d2f36f8fe115c0",
"assets/assets/characters/Obito.png": "cbac5be4963b00e8d6d9df61b6a5ed37",
"assets/assets/characters/Olivia.png": "7cd781c6bc2dd22e377df3ebea458919",
"assets/assets/characters/Orion.png": "70bef2e56a47f77a517ed7d54654ef3d",
"assets/assets/characters/Oscar.png": "e3736051a1ea6aab58d385b130f5e688",
"assets/assets/characters/Otho.png": "05637cddf43db382ead39cca95edfdba",
"assets/assets/characters/Pain.png": "b8f9fb232021cef95c7a1f605fb41396",
"assets/assets/characters/Paloma.png": "3ca6a58fc9c5bd9e92beb7657d9146ed",
"assets/assets/characters/Rafel.png": "72f0c158d2d0dc3df5cada0d55ed0cdd",
"assets/assets/characters/RahulGandhi.png": "de2017405fbacc9f6d31c91a1747e15f",
"assets/assets/characters/Ray.png": "d22af289363b90cc51d5e386d2807fce",
"assets/assets/characters/Rin.png": "14314142a6a0035a5867aefc938fc239",
"assets/assets/characters/Ryden.png": "23f04be6d19aa4695fca4f9024c1094f",
"assets/assets/characters/Sakura.png": "bc993ca9a00a1e571bd4d4846043ee83",
"assets/assets/characters/Santino.png": "b23d8f64057b789e2b2834faa0efd331",
"assets/assets/characters/Sasuke.png": "0e6e7759e8706e0df6897c3a5ea368b2",
"assets/assets/characters/ScarletWitch.png": "072a1fedef51e2da0ff1b6a6b36c8261",
"assets/assets/characters/Shani.png": "67f8b9b336667b38021aa76ca49b2b8a",
"assets/assets/characters/Shikamaru.png": "e2caab0f0226a115a769af15c0b23aa5",
"assets/assets/characters/Shirou.png": "dd64e0c549b139553c1ef0a826e47cb0",
"assets/assets/characters/Skyler.png": "dd494aa60e7dc4b159282b56f45ac797",
"assets/assets/characters/Soniya.png": "84efdec3ba0a3f0957a3309ef24f2414",
"assets/assets/characters/SpiderMan.png": "f8ef65b7862ae12ea10733d76ffb4629",
"assets/assets/characters/Steffie.png": "068eb57c78da30c6c7277b2b72862418",
"assets/assets/characters/SungJinWoo.png": "e0e72e697c14c130e9199f1be0a63392",
"assets/assets/characters/Supergirl.png": "03128304859321721bea30f1577bf1ee",
"assets/assets/characters/Superman.png": "1f9e26e1427d766467e0a29abd32167c",
"assets/assets/characters/Suzy.png": "18bdd6ea79d69e6ce17a280f63b4dee9",
"assets/assets/characters/Tatsuya.png": "e102ab586820b56fd5fc490d707e1d92",
"assets/assets/characters/Thanos.png": "be8366075714850fb07af3d419bb5475",
"assets/assets/characters/Thiva.png": "13bc4c86147f79080b476653337ebc6d",
"assets/assets/characters/Thor.png": "0effcfec2dc61ede695be1233c1dad03",
"assets/assets/characters/Trump.png": "732a0cb1e4e9db335bbf9b4fcc62b75d",
"assets/assets/characters/Uzumaki.png": "69549774587a3f5827708e7425e38829",
"assets/assets/characters/Victor.png": "f945b2f7855e9f6fdcb38f54635e8f52",
"assets/assets/characters/Wolfrah.png": "206b70d09b69ecbffd06a5e5d8e0000f",
"assets/assets/characters/Wolverine.png": "14c31e1867079ce3e1ee3b867c4957a0",
"assets/assets/characters/WonderWoman.png": "1b5d03c13537ce2080e7171cf13a838f",
"assets/assets/characters/Wukong.png": "4d4a14e51123fefb3541ead67931419d",
"assets/assets/characters/Xayne.png": "00673432eda0db904c4ed44c70eab83a",
"assets/assets/sfx/cut.wav": "484cc61a2fd39b65f938ecb94d664a5b",
"assets/assets/sfx/dice_roll.wav": "9322c18b98b89fa9e3c89d718bbb6683",
"assets/assets/sfx/dice_six.wav": "4b5c45314aaaffe50f8d54d7a0232256",
"assets/assets/sfx/extra_turn.wav": "ea8355cfc2c0cc461ca545c620c89b05",
"assets/assets/sfx/forfeit.wav": "f55fa5be6cd4b8699d925846f3865607",
"assets/assets/sfx/home.wav": "f693f0124c7df27bff6f983e68408039",
"assets/assets/sfx/hop.wav": "517fe4b1e2d4d81219e3f83a0001b46a",
"assets/assets/sfx/lose.wav": "c69a8c8d61d47ca8d762a091cce5cdbb",
"assets/assets/sfx/match_start.wav": "aca0586da044a9815bb17162b6d57d7f",
"assets/assets/sfx/miss.wav": "63612910f1524aaeace68fd67063fb12",
"assets/assets/sfx/no_move.wav": "ad43f9255e95d9998afc65f9cbf7b7fa",
"assets/assets/sfx/tap.wav": "dd6783e5736645d6f8bded709eae6149",
"assets/assets/sfx/token_open.wav": "b5b5ee746dd4b13c3582aff7020a8207",
"assets/assets/sfx/ui_click.wav": "e0647ab4ee50b561f572bfe13fd904c5",
"assets/assets/sfx/win.wav": "2caaeb6f6c4fe5e12598c27c172d3057",
"assets/assets/ui/booyah_logo.png": "19d025fd5b4724eb7cd16d0cfdd15ed5",
"assets/assets/ui/ff_loading_bg.jpg": "3a299cabda2576dfb4f327cd42e03eca",
"assets/assets/ui/ff_lobby_bg.jpg": "d57fc28937fc3db2161eb5dc4f4aeb56",
"assets/assets/ui/garena_logo.png": "3e6e44008e646e9e28ceaae38e49e29a",
"assets/assets/ui/icon_close.png": "b69d76f52dd1c3b1dc01c33b9c5f1e9e",
"assets/assets/ui/icon_mail.png": "634fedcc0e2c3d945c6e6eaaf7c16998",
"assets/assets/ui/icon_setting.png": "2854c3cd5a0f30457d16dd01001e3cc3",
"assets/assets/ui/icon_store.png": "dd2665462577476675380defd2b97bed",
"assets/assets/ui/lobby_bg.png": "1adf6a8fb3d1b037852bcd292a3ac02e",
"assets/assets/ui/profile_stats_bg.png": "44574627334b34fd53c09fad36341596",
"assets/assets/ui/rank_crest.png": "5c0e99e71ceabed5f54e5aa1f3b1cfe8",
"assets/fonts/MaterialIcons-Regular.otf": "a7e92ebe71a420379a1667d0e98fc536",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "e29712b14957bd9443bf909dcbef693f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "865297dd334ac816c401766ed10e3678",
"/": "865297dd334ac816c401766ed10e3678",
"main.dart.js": "66f451f3cb32d33d6b695a2306cb9a6e",
"manifest.json": "1aa6ed0e0b17c59e635fb86bf66ccf00",
"version.json": "995f9cc013866a4a099e974d60b8dd43"};
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
