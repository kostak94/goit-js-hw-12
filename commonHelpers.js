import{a as B,S as H,i as m}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const q="https://pixabay.com/api/",P="42750386-32909fc47eb0ca0c6c8fc758e";async function g(e,o){const s={key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15},n=`${q}`;return(await B.get(n,{params:s})).data}const $=new H(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});function C(e){const{webformatURL:o,largeImageURL:s,tags:n,likes:t,views:r,comments:i,downloads:v}=e;return`
     <li class="gallery-item">
          <a href="${s}" class="photo-link">
            <img class="photo"
                width="360"
                height="152"
                src="${o}" 
                alt="${n}" 
            />
          </a>
          <p class="info-photo-box">
            <span class="info-item"><b>Likes</b><br/>${t}</span>
            <span class="info-item"><b>Views</b><br/>${r}</span>
            <span class="info-item"><b>Comments</b><br/>${i}</span>
            <span class="info-item"><b>Downloads</b><br/>${v}</span>
          </p>
        </li>
    `}function y(e){return e.map(C).join("")}function f(){$.refresh()}const x="/goit-js-hw-12/assets/bi_x-octagon-4f06a8ee.svg",b=document.querySelector(".loader-container"),E=document.querySelector(".search-form"),l=document.querySelector(".gallery"),h=document.querySelector(".load-btn");let c,a=1,L=15;E.addEventListener("submit",M);h.addEventListener("click",O);async function M(e){if(e.preventDefault(),l.innerHTML="",a=1,c=e.target.elements.query.value.trim(),!c){u("Search line is empty"),d();return}S();try{const o=await g(c,a);if(o.totalHits===0){p(),u("Sorry, there are no images matching <br/> your search query. Please, try again!");return}w(`We found ${o.totalHits} photos`);const s=y(o.hits);l.innerHTML=s,f(),o.totalHits<L?p():R()}catch{u("Something went wrong!!!")}finally{d(),e.target.reset()}}async function O(){a+=1,S();const e=await g(c,a),o=Math.ceil(e.totalHits/L),s=y(e.hits);l.insertAdjacentHTML("beforeend",s),f(),f(),o===a&&(p(),w("We're sorry, but you've reached the end of search results")),d(),I()}function I(){const e=l.querySelector(".gallery-item"),s={top:Number.parseInt(e.getBoundingClientRect().height)*2,behavior:"smooth"};window.scrollBy(s)}function w(e){return m.info({title:"",message:e,position:"topRight"})}function u(e){return m.error({title:"",backgroundColor:"#c55f5f",titleColor:"#fff",messageColor:"#fff",message:e,iconUrl:x,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function S(){return b.classList.remove("is-hidden")}function d(){return b.classList.add("is-hidden")}function R(){h.classList.remove("is-hidden")}function p(){h.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
