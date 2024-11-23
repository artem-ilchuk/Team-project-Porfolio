import{A as S,i as d,a as y,S as b,N as E,P as k,K as O,M as _}from"./assets/vendor-B6OOYGta.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const v=document.querySelector("#theme-switch"),a=document.body,u="switch";document.addEventListener("DOMContentLoaded",A);v.addEventListener("click",e=>{e.target.checked?(a.classList.replace("light","dark"),h(u,"dark")):(a.classList.replace("dark","light"),h(u,"light"))});function A(){I(u)==="dark"?(a.classList.replace("light","dark"),v.checked=!0):a.classList.replace("dark","light")}function h(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(n){console.log(n)}}function I(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.log(t)}}new S(".accordion-container",{duration:750,showMultiple:!1,openOnInit:[0],onOpen:function(e){}});document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("btn_my_project_first"),t=3;if(!e){console.error("Кнопка з ID 'btn_my_project_first' не знайдена!");return}e.addEventListener("click",()=>{const n=document.querySelectorAll(".list_my_project.hidden");let s=0;n.forEach(o=>{s<t&&o.classList.contains("hidden")&&(o.style.display="block",setTimeout(()=>{o.classList.remove("hidden"),o.classList.add("show")},100),s++)}),document.querySelectorAll(".list_my_project.hidden").length===0&&(e.style.display="none")})});const M=document.querySelector(".together-form"),i=document.getElementById("user-email"),m=document.querySelector(".email-correct-icon"),p=document.querySelector(".input-textarea"),f=document.querySelector(".together-invalid-email"),c=document.querySelector(".backdrop"),q=document.querySelector(".pop-up-close-btn"),L=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,P="https://portfolio-js.b.goit.study/api/requests",x=()=>{L.test(i.value)?(m.classList.remove("d-none"),f.classList.add("d-none"),i.classList.remove("form-input-name-error")):m.classList.add("d-none")},w=()=>{i.value="",p.value="",m.classList.add("d-none"),f.classList.add("d-none"),i.classList.remove("form-input-name-error")},D=async e=>{if(e.preventDefault(),!L.test(i.value)){f.classList.remove("d-none"),i.classList.add("form-input-name-error");return}if(p.value.trim()===""){d.error({message:"All fields must be completed!",position:"topRight",maxWidth:"300px"});return}const t={email:i.value.trim(),comment:p.value.trim()};try{await y.post(P,t),c.classList.add("is-open"),w()}catch{d.error({message:"Ops! Something went wrong. Please try again!",position:"topRight",maxWidth:"300px"})}},g=()=>{c.classList.remove("is-open")};i.addEventListener("input",x);M.addEventListener("submit",D);q.addEventListener("click",g);c.addEventListener("click",e=>{e.target===c&&g()});document.addEventListener("keydown",e=>{e.key==="Escape"&&g()});document.addEventListener("DOMContentLoaded",w);T();B();async function T(){await y.get("https://portfolio-js.b.goit.study/api/reviews").then(e=>{j(e.data)}).catch(e=>{N("Reviews not found"),document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend",'<li class="not-found"><p class="not-found-text">Not Found</p></li>')})}function j(e){const t=document.querySelector(".swiper-wrapper");let n=e.map(s=>`
    <li class="swiper-slide">
        <p class="review-text">
          ${s.review}
        </p>
        <div class="review-thumb">
          <img class="review-avatar" src="${s.avatar_url}" alt="Autor: ${s.author}">
          <p class="review-author">${s.author}</p>
        </div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",n)}function B(){new b(".swiper",{modules:[E,k,O,_],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0},mousewheel:{enabled:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}}})}function N(e,t="red"){d.show({icon:"icon-person",message:e,color:t,position:"topRight",transitionIn:"bounceInDown",transitionOut:"flipOutX",closeOnClick:!0,displayMode:"replace",timeout:3e3})}
//# sourceMappingURL=index.js.map
