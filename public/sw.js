if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9f7469d9c505f66631911f91b0d2f6e5"},{url:"/_next/static/ChJ_cws73D3ZFP8GrhJ3k/_buildManifest.js",revision:"ae9eef61ecb4f32528f2e03fce5305d0"},{url:"/_next/static/ChJ_cws73D3ZFP8GrhJ3k/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/864-652e057850b301e3.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/app/_not-found-d3e7605366860f2e.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/app/details/page-b6ee4509066f5930.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/app/home/page-6b94ee25a791618f.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/app/layout-d2b8f7f0777ea165.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/app/login/page-e3bec621aee1d6cf.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/app/page-52eb1e6f21427916.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/fd9d1056-11d747a282a562a9.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/main-app-214d0f76577b7528.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/main-b1b12c84b25ae74f.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/pages/_app-27277a117f49dcf1.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/pages/_error-91a5938854a6f402.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-31f4b6425296542f.js",revision:"ChJ_cws73D3ZFP8GrhJ3k"},{url:"/_next/static/css/f3df923321f54821.css",revision:"f3df923321f54821"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icon-192x192.png",revision:"c824134f2420367eefb26b3d96cb2acc"},{url:"/icon-256x256.png",revision:"051aa1e65118edb48fb5b5e91b78bda9"},{url:"/icon-384x384.png",revision:"347c52d45fe8f5c4718e817817ad7b73"},{url:"/icon-512x512.png",revision:"35bdaca1cee569610dd12baeebadce6b"},{url:"/icon-guitar.png",revision:"35bdaca1cee569610dd12baeebadce6b"},{url:"/manifest.webmanifest",revision:"e610b4bbc1161b41d5e7574a13018e59"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
