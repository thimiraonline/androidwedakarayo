/*!
 * Licensed under GPLv3
 */!function n(o,i,c){function s(t,e){if(!i[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(u)return u(t,!0);throw(r=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",r}r=i[t]={exports:{}},o[t][0].call(r.exports,function(e){return s(o[t][1][e]||e)},r,r.exports,n,o,i,c)}return i[t].exports}for(var u="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,t,r){"use strict";document.addEventListener("DOMContentLoaded",function(){var i,e=document.querySelector(".js-kusi-doc");!e||(e=e.querySelectorAll(["h1","h2","h3"].join(","))).length&&(i=document.querySelector(".js-table-content"),document.querySelector(".js-sidebar-right")&&document.querySelector(".js-sidebar-wrap").classList.remove("hidden"),e.forEach(function(e){e.classList="hover-title";var t,r,n,o=document.createElement("a");o.href="#".concat(e.getAttribute("id")),t=o.cloneNode(!0),r=e,i&&(t.textContent=r.textContent,n=document.createElement("li"),r.closest("h3")?t.classList="py-1 pl-3 block text-xs hover:text-primary":t.classList="py-2 block hover:text-primary",n.appendChild(t),i.appendChild(n)),e=e,(o=o).setAttribute("aria-hidden","true"),o.innerHTML='<svg class="icon is-stroke" aria-hidden="true"><use xlink:href="#icon-link"></use></svg>',o.classList="anchor px-3 inline-block invisible opacity-0 -ml-12 text-gray-500",e.insertBefore(o,e.childNodes[0])}))})},{}]},{},[1]);