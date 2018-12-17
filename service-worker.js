/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6a24af93c235db5d040f79eb8c14efeb"
  },
  {
    "url": "assets/css/0.styles.8458a99a.css",
    "revision": "c5fdac8975684ed51b2297bcdca8a20b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.280f6047.js",
    "revision": "141eb093f3a5bcd303e75af9cafb7705"
  },
  {
    "url": "assets/js/11.49fb7d4f.js",
    "revision": "a0562f9046c0f029e573d0f251e846c4"
  },
  {
    "url": "assets/js/12.75f4e602.js",
    "revision": "84f39645c17ecd371e7eaa3902ee9257"
  },
  {
    "url": "assets/js/2.cd2a9dac.js",
    "revision": "46aa3cfb9e8dda75ebe31b7d20931392"
  },
  {
    "url": "assets/js/3.833ec859.js",
    "revision": "bcdc206559c28fbebc8d531c266d875c"
  },
  {
    "url": "assets/js/4.df908839.js",
    "revision": "31abfc052154637e04261243c88bcb99"
  },
  {
    "url": "assets/js/5.a0e31f52.js",
    "revision": "3a5707836f21474b74e3c88ff4fc9095"
  },
  {
    "url": "assets/js/6.e0c4489c.js",
    "revision": "95562e888e23b8d5fef37ca85fa37cd1"
  },
  {
    "url": "assets/js/7.e91ba92a.js",
    "revision": "dc58eb7d7f48f815e4d483c08461137d"
  },
  {
    "url": "assets/js/8.814ba676.js",
    "revision": "dcf6abd38e6f9235eba4058460f8f896"
  },
  {
    "url": "assets/js/9.97638f65.js",
    "revision": "3a3e71baa00f7bf41e7ffcee683ac240"
  },
  {
    "url": "assets/js/app.1074f715.js",
    "revision": "84eb7b8465e733631b78d3644c690723"
  },
  {
    "url": "changerate.png",
    "revision": "2163a509accd60d4c26effc31cc3a20e"
  },
  {
    "url": "command.png",
    "revision": "7753e2e7931f6b6f6f396a013ce338f0"
  },
  {
    "url": "connect.png",
    "revision": "be46d87a5676cfa15f3151001b806cf7"
  },
  {
    "url": "guide/dlpack.html",
    "revision": "0650a5db3ab87ffabc4adf6d4dc15e9e"
  },
  {
    "url": "guide/index.html",
    "revision": "8393edc73835f97554151647cf4b6670"
  },
  {
    "url": "guide/install.html",
    "revision": "442918349b24869b290bdd3620e3c9ab"
  },
  {
    "url": "guide/judgeswitch.html",
    "revision": "7dc7d4be87592fd0b6e7ba92aac4084f"
  },
  {
    "url": "guide/multiplay.html",
    "revision": "5f047e4f8f206ca18dbec764b980f5a1"
  },
  {
    "url": "guide/noteskin.html",
    "revision": "08a77c05e22b4b5083fcde0f7a53e06c"
  },
  {
    "url": "guide/ratechange.html",
    "revision": "991a45cd08006a619592d6e3cf5e4328"
  },
  {
    "url": "index.html",
    "revision": "15a7d14f665ef9beefa6ee71d08e356f"
  },
  {
    "url": "multiinput.png",
    "revision": "840c43609b814dbf360ca23d580f2217"
  },
  {
    "url": "multimain.png",
    "revision": "1e890c1ac7a5f6dc38a8d506252333c4"
  },
  {
    "url": "multiselect.png",
    "revision": "64042a405f55b08bca7ebaa349351fc0"
  },
  {
    "url": "zh/index.html",
    "revision": "8c5f39b859e15d62727e060f21a740d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
