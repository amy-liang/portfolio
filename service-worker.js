"use strict";var precacheConfig=[["/portfolio/index.html","864998d51b4b2af810d4f49a8937c1f3"],["/portfolio/static/css/main.73b2460b.css","f748ee725cf7fe00858771536f068566"],["/portfolio/static/js/main.a1d2b530.js","4bf374a0d92477709fcf78421805df49"],["/portfolio/static/media/background1.645288c6.png","645288c649f05ef61b99e3f433d3683d"],["/portfolio/static/media/background2.562ba911.png","562ba911d887bba2dc62505d5b1c810c"],["/portfolio/static/media/background3.98b78f7a.png","98b78f7aac65e8c9133af1659d1608f9"],["/portfolio/static/media/css.283f5b06.svg","283f5b06658da4717a19efec8f563c52"],["/portfolio/static/media/html.622fae5b.svg","622fae5bff5dce83fcf1dfdd930bac20"],["/portfolio/static/media/java.4c5c759d.svg","4c5c759dd7b4a6f73e85f5403d3e0c08"],["/portfolio/static/media/javascript.6ffa2813.svg","6ffa2813d427fff7dc29160d95426480"],["/portfolio/static/media/logo.0098667a.svg","0098667a2564a26e3946bcc2aaa61ec5"],["/portfolio/static/media/react.4f2c222b.svg","4f2c222b169157d2a25356c3b30cae39"],["/portfolio/static/media/sass.17a441a5.svg","17a441a589ce6e462b1b368cbd0014cd"],["/portfolio/static/media/selfportrait.fa65d61c.png","fa65d61c466359a841e6d7269f129ade"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});