!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function e(t){return r(2,t,function(r){return function(n){return t(r,n)}})}function t(e){return r(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function u(u){return r(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function a(a){return r(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function y(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function w(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function s(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function i(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}var k={$:0};function b(n,r){return{$:1,a:n,b:r}}var f=e(b);function E(n){for(var r=k,t=n.length;t--;)r=b(n[t],r);return r}function l(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(!n.$)return(t=l(n.a,r.a))?t:(t=l(n.b,r.b))?t:l(n.c,r.c);for(;n.b&&r.b&&!(t=l(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var o=0;function j(n,r){return{a:n,b:r}}function c(n,r,t){return{a:n,b:r,c:t}}function d(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}var v=t(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),h=e(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,j(t,r)});function g(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var $=Math.cos,m=Math.sin;var p=Math.ceil,A=Math.floor,_=Math.round,L=Math.log;function N(n){return n+""}var T=e(function(n,r){return O(n,P(r))});function O(n,r){switch(n.$){case 3:return"boolean"==typeof r?dr(r):x("a BOOL",r);case 2:return"number"!=typeof r?x("an INT",r):-2147483647<r&&r<2147483647&&(0|r)===r?dr(r):!isFinite(r)||r%1?x("an INT",r):dr(r);case 4:return"number"==typeof r?dr(r):x("a FLOAT",r);case 6:return"string"==typeof r?dr(r):r instanceof String?dr(r+""):x("a STRING",r);case 9:return null===r?dr(n.c):x("null",r);case 5:return dr(B(r));case 7:return Array.isArray(r)?C(n.b,r,E):x("a LIST",r);case 8:return Array.isArray(r)?C(n.b,r,q):x("an ARRAY",r);case 10:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return x("an OBJECT with a field named `"+t+"`",r);var e=O(n.b,r[t]);return Jn(e)?e:lr(y(gr,t,e.a));case 11:var u=n.e;if(!Array.isArray(r))return x("an ARRAY",r);if(r.length<=u)return x("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r);e=O(n.b,r[u]);return Jn(e)?e:lr(y($r,u,e.a));case 12:if("object"!=typeof r||null===r||Array.isArray(r))return x("an OBJECT",r);var a=k;for(var i in r)if(r.hasOwnProperty(i)){e=O(n.b,r[i]);if(!Jn(e))return lr(y(gr,i,e.a));a=b(j(i,e.a),a)}return dr(rr(a));case 13:for(var f=n.f,o=n.g,c=0;c<o.length;c++){e=O(o[c],r);if(!Jn(e))return e;f=f(e.a)}return dr(f);case 14:e=O(n.b,r);return Jn(e)?O(n.h(e.a),r):e;case 15:for(var v=k,s=n.g;s.b;s=s.b){e=O(s.a,r);if(Jn(e))return e;v=b(e.a,v)}return lr(mr(rr(v)));case 1:return lr(y(hr,n.a,B(r)));case 0:return dr(n.a)}}function C(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=O(n,r[a]);if(!Jn(i))return lr(y($r,a,i.a));u[a]=i.a}return dr(t(u))}function q(r){return y(vr,r.length,function(n){return r[n]})}function x(n,r){return lr(y(hr,"Expecting "+n,B(r)))}function F(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return n.c===r.c;case 7:case 8:case 12:return F(n.b,r.b);case 10:return n.d===r.d&&F(n.b,r.b);case 11:return n.e===r.e&&F(n.b,r.b);case 13:return n.f===r.f&&M(n.g,r.g);case 14:return n.h===r.h&&F(n.b,r.b);case 15:return M(n.g,r.g)}}function M(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!F(n[e],r[e]))return!1;return!0}function B(n){return n}function P(n){return n}var S=t(function(n,r,t){return t[n]=P(r),t});B(null);function R(n){return{$:0,a:n}}function z(n){return{$:2,b:n,c:null}}var I=e(function(n,r){return{$:3,b:n,d:r}});var D=0;function H(n){var r={$:0,e:D++,f:n,g:null,h:[]};return Y(r),r}function V(r){return z(function(n){n(R(H(r)))})}function G(n,r){n.h.push(r),Y(n)}var J=e(function(r,t){return z(function(n){G(r,t),n(R(o))})});var K=!1,W=[];function Y(n){if(W.push(n),!K){for(K=!0;n=W.shift();)Q(n);K=!1}}function Q(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,Y(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}function U(n,r,t,e,u,a){var i=y(T,n,B(r?r.flags:void 0));Jn(i)||g(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(n,r){var t;for(var e in X){var u=X[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=nn(u,r)}return t}(f,s);function s(n,r){c(o=(i=y(e,n,o)).a,r),un(f,i.b,u(o))}return un(f,i.b,u(o)),v?{ports:v}:{}}var X={};function Z(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function nn(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,f=n.f;function o(t){return y(I,o,{$:5,b:function(n){var r=n.a;return 0===n.$?w(a,e,r,t):i&&f?s(u,e,r.i,r.j,t):w(u,e,i?r.i:r.j,t)}})}return e.h=H(y(I,o,n.b))}var rn=e(function(r,t){return z(function(n){r.g(t),n(R(o))})}),tn=e(function(n,r){return y(J,n.h,{$:0,a:r})});function en(r){return function(n){return{$:1,k:r,l:n}}}function un(n,r,t){var e={};for(var u in an(!0,r,e,null),an(!1,t,e,null),n)G(n[u],{$:"fx",a:e[u]||{i:k,j:k}})}function an(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.q)n=r.p(n);return n}return y(n?X[r].e:X[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:k,j:k},n?t.i=b(r,t.i):t.j=b(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)an(n,i.a,t,e);return;case 3:return void an(n,r.o,t,{p:r.n,q:e})}}var fn,on="undefined"!=typeof document?document:{};function cn(n,r){n.appendChild(r)}function vn(n){return{$:0,a:n}}var sn=e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:hn(n),e:t,f:a,b:e}})})(void 0);e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:hn(n),e:t,f:a,b:e}})})(void 0);var bn=e(function(n,r){return{$:"a2",n:n,o:r}}),ln=e(function(n,r){return{$:"a3",n:n,o:r}});var dn;function hn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?gn(i,u,a):i[u]=a}else"className"===u?gn(r,u,P(a)):r[u]=P(a)}return r}function gn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function $n(n,r){var t=n.$;if(5===t)return $n(n.k||(n.k=n.m()),r);if(0===t)return on.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=$n(e,a)).elm_event_node_ref=a,i}if(3===t)return mn(i=n.h(n.g),r,n.d),i;var i=n.f?on.createElementNS(n.f,n.c):on.createElement(n.c);fn&&"a"==n.c&&i.addEventListener("click",fn(i)),mn(i,r,n.d);for(var f=n.e,o=0;o<f.length;o++)cn(i,$n(1===t?f[o]:f[o].b,r));return i}function mn(n,r,t){for(var e in t){var u=t[e];"a1"===e?pn(n,u):"a0"===e?wn(n,r,u):"a3"===e?An(n,u):"a4"===e?yn(n,u):("value"!==e||"checked"!==e||n[e]!==u)&&(n[e]=u)}}function pn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function An(n,r){for(var t in r){var e=r[t];e?n.setAttribute(t,e):n.removeAttribute(t)}}function yn(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function wn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=kn(r,a),n.addEventListener(u,i,dn&&{passive:Rr(a)<2}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){dn=!0}}))}catch(n){}function kn(v,n){function s(n){var r=s.q,t=O(r.a,n);if(Jn(t)){for(var e,u=Rr(r),a=t.a,i=u?u<3?a.a:a.P:a,f=1==u?a.b:3==u&&a.a7,o=(f&&n.stopPropagation(),(2==u?a.b:3==u&&a.a2)&&n.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=n,s}function En(n,r){return n.$==r.$&&F(n.a,r.a)}function jn(n,r){var t=[];return Ln(n,r,t,0),t}function _n(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Ln(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void _n(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,f=r.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return Ln(n.k,r.k,v,0),void(0<v.length&&_n(t,1,e,v));case 4:for(var s=n.j,b=r.j,l=!1,d=n.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=r.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void _n(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,b):s===b)||_n(t,2,e,b),void Ln(d,h,t,e+1));case 0:return void(n.a!==r.a&&_n(t,3,e,r.a));case 1:return void Nn(n,r,t,e,On);case 2:return void Nn(n,r,t,e,Cn);case 3:if(n.h!==r.h)return void _n(t,0,e,r);var g=Tn(n.d,r.d);g&&_n(t,4,e,g);var $=r.i(n.g,r.g);return void($&&_n(t,5,e,$))}}}function Nn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=Tn(n.d,r.d);a&&_n(t,4,e,a),u(n,r,t,e)}else _n(t,0,e,r)}function Tn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&En(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var f=Tn(n[u],r[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in r)o in n||((e=e||{})[o]=r[o]);return e}function On(n,r,t,e){var u=n.e,a=r.e,i=u.length,f=a.length;f<i?_n(t,6,e,{v:f,i:i-f}):i<f&&_n(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Ln(v,a[c],t,++e),e+=v.b||0}}function Cn(n,r,t,e){for(var u=[],a={},i=[],f=n.e,o=r.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(_=f[s]).a,h=(L=o[b]).a,g=_.b,$=L.b;if(d!==h){var m=f[s+1],p=o[b+1];if(m)var A=m.a,y=m.b,w=h===A;if(p)var k=p.a,E=p.b,j=d===k;if(j&&w)Ln(g,E,u,++l),xn(a,u,d,$,b,i),l+=g.b||0,Fn(a,u,d,y,++l),l+=y.b||0,s+=2,b+=2;else if(j)l++,xn(a,u,h,$,b,i),Ln(g,E,u,l),l+=g.b||0,s+=1,b+=2;else if(w)Fn(a,u,d,g,++l),l+=g.b||0,Ln(y,$,u,++l),l+=y.b||0,s+=2,b+=1;else{if(!m||A!==k)break;Fn(a,u,d,g,++l),xn(a,u,h,$,b,i),l+=g.b||0,Ln(y,E,u,++l),l+=y.b||0,s+=2,b+=2}}else Ln(g,$,u,++l),l+=g.b||0,s++,b++}for(;s<c;){var _;Fn(a,u,(_=f[s]).a,g=_.b,++l),l+=g.b||0,s++}for(;b<v;){var L,N=N||[];xn(a,u,(L=o[b]).a,L.b,void 0,N),b++}(0<u.length||0<i.length||N)&&_n(t,8,e,{w:u,x:i,y:N})}var qn="_elmW6BL";function xn(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Ln(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}xn(n,r,t+qn,e,u,a)}function Fn(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return Ln(e,a.z,i,u),void _n(r,9,u,{w:i,A:a})}Fn(n,r,t+qn,e,u)}else{var f=_n(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:f}}}function Mn(n,r,t,e){!function n(r,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Mn(r,t.k,o.s,f);else if(8===v){o.t=r,o.u=f;var s=o.s.w;0<s.length&&n(r,t,s,0,a,i,f)}else if(9===v){o.t=r,o.u=f;var b=o.s;if(b){b.A.s=r;var s=b.w;0<s.length&&n(r,t,s,0,a,i,f)}}else o.t=r,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return n(r,d,e,u,a+1,i,r.elm_event_node_ref)}var h=t.e;var g=r.childNodes;for(var $=0;$<h.length;$++){var m=1===l?h[$]:h[$].b,p=++a+(m.b||0);if(a<=c&&c<=p&&(u=n(g[$],m,e,u,a,p,f),!(o=e[u])||(c=o.r)>i))return u;a=p}return u}(n,r,t,0,0,r.b,e)}function Bn(n,r,t,e){return 0===t.length?n:(Mn(n,r,t,e),Pn(n,t))}function Pn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,a=Sn(u,e);u===n&&(n=a)}return n}function Sn(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,u=$n(r,t);u.elm_event_node_ref||(u.elm_event_node_ref=n.elm_event_node_ref);e&&u!==n&&e.replaceChild(u,n);return u}(n,r.s,r.u);case 4:return mn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Pn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore($n(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=Pn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(!n)return;for(var t=on.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e],a=u.A;cn(t,2===a.c?a.s:$n(a.z,r.u))}return t}(t.y,r);n=Pn(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:$n(f.z,r.u);n.insertBefore(o,n.childNodes[i.r])}e&&cn(n,e);return n}(n,r);case 5:return r.s(n);default:g(10)}}function Rn(n){if(3===n.nodeType)return vn(n.textContent);if(1!==n.nodeType)return vn("");for(var r=k,t=n.attributes,e=t.length;e--;){var u=t[e];r=b(y(ln,u.name,u.value),r)}var a=n.tagName.toLowerCase(),i=k,f=n.childNodes;for(e=f.length;e--;)i=b(Rn(f[e]),i);return w(sn,a,r,i)}var zn=u(function(r,n,t,f){return U(n,f,r.cd,r.cI,r.cC,function(e,n){var u=r.cK,a=f.node,i=Rn(a);return Dn(n,function(n){var r=u(n),t=jn(i,r);a=Bn(a,i,t,e),i=r})})}),In="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){setTimeout(n,1e3/60)};function Dn(t,e){e(t);var u=0;function a(){u=1===u?0:(In(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&In(a),u=2)}}var Hn={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Vn=f,Gn=_,Jn=function(n){return!n.$},Kn=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Wn=p,Yn=e(function(n,r){return L(r)/L(n)}),Qn=Wn(y(Yn,2,32)),Un=[],Xn=s(Kn,0,Qn,Un,Un),Zn=h,nr=t(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=y(n,t.a,r);n=u,r=a,t=e}}),rr=function(n){return w(nr,Vn,k,n)},tr=e(function(n,r){for(;;){var t=y(Zn,32,n),e=t.b,u=y(Vn,{$:0,a:t.a},r);if(!e.b)return rr(u);n=e,r=u}}),er=e(function(n,r){for(;;){var t=Wn(r/32);if(1===t)return y(Zn,32,n).a;n=y(tr,n,k),r=t}}),ur=A,ar=e(function(n,r){return 0<l(n,r)?n:r}),ir=function(n){return n.length},fr=e(function(n,r){if(r.k){var t=32*r.k,e=ur(y(Yn,32,t-1)),u=n?rr(r.o):r.o,a=y(er,u,r.k);return s(Kn,ir(r.n)+t,y(ar,5,e*Qn),a,r.n)}return s(Kn,ir(r.n),Qn,Un,r.n)}),or=v,cr=a(function(n,r,t,e,u){for(;;){if(r<0)return y(fr,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:w(or,32,r,n)};n=n,r=r-32,t=t,e=y(Vn,a,e),u=u}}),vr=e(function(n,r){if(0<n){var t=n%32;return i(cr,r,n-t-32,n,k,w(or,t,n-t,r))}return Xn}),sr=function(n){return{$:0,a:n}},br={$:1},lr=function(n){return{$:1,a:n}},dr=function(n){return{$:0,a:n}},hr=e(function(n,r){return{$:3,a:n,b:r}}),gr=e(function(n,r){return{$:0,a:n,b:r}}),$r=e(function(n,r){return{$:1,a:n,b:r}}),mr=function(n){return{$:2,a:n}},pr=N,Ar=function(n){return{$:2,m:n}}(k),yr=e(function(n,r){return{$:0,a:n,b:r}}),wr=function(n){var r=n.b;return y(yr,1664525*n.a+r>>>0,r)},kr=function(n){var r=wr(y(yr,0,1013904223));return wr(y(yr,r.a+n>>>0,r.b))},Er=function(n){return{$:1,a:n}},jr=t(function(n,r,t){return{aV:t,bE:r,bH:n}}),_r=R,Lr=_r(w(jr,k,br,0)),Nr=function(n){return n},Tr=_r(0),Or=u(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return y(n,u,y(n,i,y(n,o,y(n,c.a,500<t?w(nr,n,r,rr(v)):s(Or,n,r,t+1,v)))))}return y(n,u,y(n,i,y(n,o,r)))}return y(n,u,y(n,i,r))}return y(n,u,r)}return r}),Cr=t(function(n,r,t){return s(Or,n,r,0,t)}),qr=e(function(t,n){return w(Cr,e(function(n,r){return y(Vn,t(n),r)}),k,n)}),xr=I,Fr=e(function(r,n){return y(xr,function(n){return _r(r(n))},n)}),Mr=t(function(t,n,e){return y(xr,function(r){return y(xr,function(n){return _r(y(t,r,n))},e)},n)}),Br=function(n){return w(Cr,Mr(Vn),_r(k),n)},Pr=rn,Sr=e(function(n,r){var t=r;return V(y(xr,Pr(n),t))});X.Task=Z(Tr,t(function(n,r){return y(Fr,function(){return 0},Br(y(qr,Sr(n),r)))}),t(function(){return _r(0)}),e(function(n,r){return y(Fr,n,r)}));en("Task");var Rr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},zr=z(function(n){n(R(Date.now()))}),Ir=z(function(n){var r=requestAnimationFrame(function(){n(R(Date.now()))});return function(){cancelAnimationFrame(r)}}),Dr=tn,Hr=function(t){return z(function(n){var r=t.f;2===r.$&&r.c&&r.c(),t.f=null,n(R(o))})},Vr=V,Gr=t(function(n,t,r){var e=r.bE,u=r.aV,a=j(e,t);if(1!==a.a.$)return a.b.b?_r(w(jr,t,e,u)):y(xr,function(){return Lr},Hr(a.a.a));if(a.b.b){return y(xr,function(r){return y(xr,function(n){return _r(w(jr,t,sr(r),n))},zr)},Vr(y(xr,Dr(n),Ir)))}return Lr}),Jr=Nr,Kr=t(function(r,t,n){var e=n.bH,u=n.aV,a=function(n){return y(Pr,r,n.$?(0,n.a)(t-u):(0,n.a)(Jr(t)))};return y(xr,function(n){return y(xr,function(){return _r(w(jr,e,sr(n),t))},Br(y(qr,a,e)))},Vr(y(xr,Dr(r),Ir)))}),Wr=t(function(n,r,t){return n(r(t))});X["Browser.AnimationManager"]=Z(Lr,Gr,Kr,0,e(function(n,r){return r.$?Er(y(Wr,n,r.a)):{$:0,a:y(Wr,n,r.a)}}));var Yr,Qr=en("Browser.AnimationManager"),Ur=function(n){return Qr(Er(n))},Xr=function(n){return d(n,{an:n.an+1})},Zr=function(n){return n<0?-n:n},nt=function(n){var r=n.a,t=277803737*(r^r>>>4+(r>>>28));return(t>>>22^t)>>>0},rt=e(function(u,a){return function(n){var r=wr(n),t=Zr(a-u),e=nt(r);return j((134217728*(1*(67108863&nt(n)))+1*(134217727&e))/9007199254740992*t+u,wr(r))}}),tt=y(rt,100,400),et=e(function(n,r){var t=r.b;return j(n(r.a),t)}),ut=e(function(t,i){return function(n){var r=l(t,i)<0?j(t,i):j(i,t),e=r.a,u=r.b-e+1;if(u-1&u){var a=(-u>>>0)%u>>>0;return function(n){for(;;){var r=nt(n),t=wr(n);if(0<=l(r,a))return j(r%u+e,t);n=t}}(n)}return j(((u-1&nt(n))>>>0)+e,wr(n))}}),at=e(function(n,r){return n(r)}),it=Nr,ft=Nr,ot=function(n){return n},ct=function(n){return 3.141592653589793*n/180},vt=function(n){return n},st=e(function(n,r){var t=vt(r),e=t.b;return it(j(n(t.a),n(e)))}),bt=t(function(n,r,t){return r(n(t))}),lt=function(n){return n},dt=e(function(n,r){var t=lt(n),e=t.a,u=t.b,a=ot(r);return ft(j(a.a+e,a.b+u))}),ht=e(function(n,r){return y(dt,r,n)}),gt=function(n){return n},$t=Nr,mt=e(function(n,r){var t=gt(r),e=t.a,u=t.b,a=gt(n);return $t(j(e-a.a,u-a.b))}),pt=$,At=m,yt=e(function(n,r){return y(bt,mt(n),y(bt,function(n){var u=At(n),a=pt(n);return function(n){var r=lt(n),t=r.a,e=r.b;return $t(j(t*a-e*u,e*a+t*u))}}(r),ht(n)))}),wt=e(function(n,r){return st(y(yt,n,r))}),kt=function(n){return st(dt(n))},Et=e(function(n,r){var t=lt(r);return $t(j(t.a*n,t.b*n))}),jt=function(n){var r=function(n){var r=n.E,t=n.A,e=n.O,u=y(at,y(rt,0,1),t),a=u.b,i=.98<u.a,f=vt(r),o=f.a;if(i){var c=y(et,kr,y(at,y(ut,0,1e4),a)),v=c.a,s=c.b,b=y(et,kr,y(at,y(ut,0,1e4),s)),l=b.a,d=b.b,h=y(at,y(rt,-45,45),d),g=h.a,$=h.b,m=y(at,y(rt,-45,45),$),p=m.a,A=m.b;return j(E([{O:e-10,E:w(wt,o,ct(g),r),A:v},{O:e-10,E:w(wt,o,ct(p),r),A:l}]),A)}return j(k,a)}(n),t=r.a,e=r.b,u=y(at,y(ut,0,10),e),a=u.a,i=u.b,f=n.E,o=n.O,c=y(Et,.8,function(n){var r=vt(n);return y(mt,r.a,r.b)}(f)),v={O:o-a,E:y(kt,c,f),A:i};return function(n){var r=function(n){return n.b}(n.E),t=ot(r),e=t.a,u=t.b;return-1<l(e,480)||l(e,20)<1||0<l(u,500)||l(u,20)<1}(v)||o<=0?t:y(Vn,v,t)},_t=e(function(n,r){return r.b?w(Cr,Vn,r,n):n}),Lt=function(n){return w(Cr,_t,k,n)},Nt=e(function(n,r){return Lt(y(qr,n,r))}),Tt=function(n){return!n.b},Ot=e(function(n,r){return y(et,Xr,r.an<2?j(r,Ar):Tt(r.L)?function(n){var r=y(at,tt,n.A),t=r.a,e=r.b,u=ft(j(t,495)),a=ft(j(t,500)),i=y(et,kr,y(at,y(ut,0,1e4),e)),f=i.a,o=i.b,c=y(at,y(ut,Gn(350),500),o),v=c.b;return j(d(n,{L:E([{O:c.a,E:it(j(a,u)),A:f}]),A:v}),Ar)}(r):j(d(r,{L:y(Nt,jt,r.L)}),Ar))}),Ct=e(function(n,r){return y(bn,function(n){return"innerHTML"==n||"formAction"==n?"data-"+n:n}(n),function(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}(r))}),qt=e(function(n,r){return B(w(nr,function(t){return e(function(n,r){return r.push(P(t(n))),r})}(n),[],r))}),xt=sn("canvas"),Ft=function(n){return sn(function(n){return"script"==n?"p":n}(n))},Mt=u(function(n,r,t,e){return w(Ft,"elm-canvas",E([(a=e,y(Ct,"cmds",y(qt,Nr,a)))]),E([y(xt,Lt(E([E([(u=r,y(ln,"height",pr(u))),function(n){return y(ln,"width",pr(n))}(n)]),t])),k)]));var u,a}),Bt=k,Pt=e(function(n,r){return y(Vn,r,n)}),St=function(n){return B(w(nr,e(function(n,r){return w(S,n.a,n.b,r)}),{},n))},Rt=B,zt=e(function(n,r){return St(E([j("type",Rt("function")),j("name",Rt(n)),j("args",y(qt,Nr,r))]))}),It=B,Dt=a(function(n,r,t,e,u){return y(Pt,u,y(zt,"fillRect",E([It(n),It(r),It(t),It(e)])))}),Ht=e(function(n,r){var t=ur(n);return t%r+n-t}),Vt=t(function(n,r,t){var e=n/ct(60),u=(1-Zr(2*t-1))*r,a=t-u/2,i=u*(1-Zr(y(Ht,e,2)-1)),f=e<0?c(0,0,0):e<1?c(u,i,0):e<2?c(i,u,0):e<3?c(0,u,i):e<4?c(0,i,u):e<5?c(i,0,u):e<6?c(u,0,i):c(0,0,0);return c(f.a+a,f.b+a,f.c+a)}),Gt=N,Jt=function(n){var r=function(n){if(n.$){u=n.d;var r=w(Vt,n.a,n.b,n.c);return t=r.a,e=r.b,{bL:u,bP:Gn(255*r.c),b7:Gn(255*e),cw:Gn(255*t)}}var t,e,u;return{bL:u=n.d,bP:n.c,b7:e=n.b,cw:t=n.a}}(n),t=r.b7,e=r.bP,u=r.bL;return"rgba("+pr(r.cw)+", "+pr(t)+", "+pr(e)+", "+Gt(u)+")"},Kt=e(function(n,r){return St(E([j("type",Rt("field")),j("name",Rt(n)),j("value",r)]))}),Wt=e(function(n,r){return y(Pt,r,y(Kt,"fillStyle",Rt(Jt(n))))}),Yt=e(function(n,r){return y(Pt,r,y(Kt,"strokeStyle",Rt(Jt(n))))}),Qt=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Ut=t(function(n,r,t){return s(Qt,n,r,t,1)}),Xt=Qt,Zt=t(function(n,r,t){return y(Pt,t,y(zt,"lineTo",E([It(n),It(r)])))}),ne=e(function(n,r){return y(Pt,r,y(Kt,"lineWidth",It(n)))}),re=t(function(n,r,t){return y(Pt,t,y(zt,"moveTo",E([It(n),It(r)])))}),te=function(n){return n.a},ee=function(n){return n.b},ue=e(function(n,r){var t=n.O,e=vt(n.E),u=e.a,a=e.b;return function(n){return y(Pt,n,y(zt,"stroke",k))}(w(Zt,te(a),ee(a),w(re,te(u),ee(u),function(n){return y(Pt,n,y(zt,"beginPath",k))}(y(ne,30*t/500,r)))))}),ae={$:4},ie=zn({cd:function(n){return j({L:k,an:0,A:kr(Gn(1e4*n))},Ar)},cC:function(){return Ur(Nr)},cI:Ot,cK:function(n){return s(Mt,500,500,k,Tt(n.L)?i(Dt,0,0,500,500,y(Wt,s(Xt,255,255,255,.05),Bt)):w(nr,ue,i(Dt,0,0,500,500,y(Wt,s(Xt,255,255,255,.008),y(Yt,w(Ut,0,0,0),Bt))),n.L))}});Yr={Examples:{Trees:{init:ie(ae)(0)}}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?g(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Yr):n.Elm=Yr}(this);