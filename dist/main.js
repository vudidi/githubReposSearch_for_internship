(()=>{"use strict";var e={174:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},559:(e,t,r)=>{e.exports=r.p+"2177d9efb4f2b78333fc.png"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="",r.b=document.baseURI||self.location.href,(()=>{var e=r(174),t=r.n(e),o=new URL(r(559),r.b);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}t()(o);var a=new(function(){function e(t){var r=t.baseUrl,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=r,this._headers=o}var t,r;return t=e,(r=[{key:"searchRepos",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:this._headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e)}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://api.github.com/search/repositories?q=",headers:{"Content-Type":"application/vnd.github+jso",Authorization:"Bearer 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"}});function l(e){return new Date(e).toLocaleString("sv-SE",{year:"numeric",month:"2-digit",day:"2-digit"})}var c=document.forms.searchForm,s=document.querySelector(".search__input"),u=document.querySelector(".search__no-results"),p=document.querySelector(".search__no-results"),d=document.querySelector(".items");function y(e){a.searchRepos(e).then((function(e){var t=e.items.slice(0,10).reverse();0===e.total_count?(u.style.display="block",d.style.display="none"):t.map((function(e){var t,r;d.style.display="block",t={ownerAvatar:e.owner.avatar_url,title:e.full_name,url:e.html_url,description:e.description||"No description",updatedAt:l(e.updated_at),createdAt:l(e.created_at),visibility:e.private},r=function(e){var t=f.cloneNode(!0);return t.querySelector(".item__owner-avatar").src=e.ownerAvatar,t.querySelector(".item__link").textContent=e.title,t.querySelector(".item__link").href=e.url,t.querySelector(".item__description").textContent=e.description,t.querySelector("#item-update").textContent=e.updatedAt,t.querySelector("#item-create").textContent=e.createdAt,e.visibility?t.querySelector(".item__visibility").classList.add("item__type_private"):t.querySelector(".item__visibility").classList.add("item__type_public"),t}(t),d.prepend(r)}))})).catch((function(e){console.log(e),p.textContent="Unexpected error, try again later",p.style.display="block"}))}var f=document.querySelector("#tmpl-item").content;c.addEventListener("submit",(function(e){e.preventDefault(),s.validity.valid?(y(s.value),localStorage.setItem("searchValue",JSON.stringify(s.value))):(p.textContent=s.validationMessage,p.style.display="block")})),s.addEventListener("input",(function(e){e.target,u.style.display="none",p.style.display="none"})),window.onload=function(){if(localStorage.getItem("searchValue")){var e=JSON.parse(localStorage.getItem("searchValue"));s.value=e,y(e)}}})()})();