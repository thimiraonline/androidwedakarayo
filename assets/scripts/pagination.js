/*!
 * Licensed under GPLv3
 */!function t(o,i,s){function u(r,e){if(!i[r]){if(!o[r]){var n="function"==typeof require&&require;if(!e&&n)return n(r,!0);if(l)return l(r,!0);throw(n=new Error("Cannot find module '"+r+"'")).code="MODULE_NOT_FOUND",n}n=i[r]={exports:{}},o[r][0].call(n.exports,function(e){return u(o[r][1][e]||e)},n,n.exports,t,o,i,s)}return i[r].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)u(s[e]);return u}({1:[function(e,r,n){"use strict";function t(){if(404===this.status)return l.removeEventListener("scroll",s),void l.removeEventListener("resize",u);var e=this.response.querySelector(".feed-entry-wrap");f.appendChild(e);e=this.response.querySelector("link[rel=next]");e?E.href=e.href:(l.removeEventListener("scroll",s),l.removeEventListener("resize",u)),h=c.documentElement.scrollHeight,a=v=!1}function o(){var e;a||(p+m<=h-d?v=!1:(a=!0,(e=new l.XMLHttpRequest).responseType="document",e.addEventListener("load",t),e.open("GET",E.href),e.send(null)))}function i(){v||l.requestAnimationFrame(o),v=!0}function s(){p=l.scrollY,i()}function u(){m=l.innerHeight,h=c.documentElement.scrollHeight,i()}var l,c,f,d,v,a,p,m,h,E;l=window,c=document,!(E=c.querySelector("link[rel=next]"))||(f=c.querySelector(".feed-entry-content"))&&(a=v=!(d=300),p=l.scrollY,m=l.innerHeight,h=c.documentElement.scrollHeight,l.addEventListener("scroll",s,{passive:!0}),l.addEventListener("resize",u),i())},{}]},{},[1]);