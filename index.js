import{a as u,S as p,N as f,P as g,K as h,M as m,i as w}from"./assets/vendor-HfHpcGSk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const d=document.querySelector("#theme-switch"),n=document.body,c="switch";document.addEventListener("DOMContentLoaded",y);d.addEventListener("click",r=>{r.target.checked?(n.classList.replace("light","dark"),l(c,"dark")):(n.classList.replace("dark","light"),l(c,"light"))});function y(){v(c)==="dark"?(n.classList.replace("light","dark"),d.checked=!0):n.classList.replace("dark","light")}function l(r,e){try{const s=JSON.stringify(e);localStorage.setItem(r,s)}catch(s){console.log(s)}}function v(r){try{const e=localStorage.getItem(r);return e===null?void 0:JSON.parse(e)}catch(e){console.log(e)}}L();b();async function L(){await u.get("https://portfolio-js.b.goit.study/api/reviews").then(r=>{S(r.data)}).catch(r=>{O("Reviews not found"),document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend",'<li class="not-found"><p class="not-found-text">Not Found</p></li>')})}function S(r){const e=document.querySelector(".swiper-wrapper");let s=r.map(i=>`
    <li class="swiper-slide">
        <p class="review-text">
          ${i.review}
        </p>
        <div class="review-thumb">
          <img class="review-avatar" src="${i.avatar_url}" alt="Autor: ${i.author}">
          <p class="review-author">${i.author}</p>
        </div>
      </li>`).join("");e.insertAdjacentHTML("beforeend",s)}function b(){new p(".swiper",{modules:[f,g,h,m],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}})}function O(r,e="red"){w.show({icon:"icon-person",message:r,color:e,position:"topRight",transitionIn:"bounceInDown",transitionOut:"flipOutX",closeOnClick:!0,displayMode:"replace",timeout:3e3})}
//# sourceMappingURL=index.js.map