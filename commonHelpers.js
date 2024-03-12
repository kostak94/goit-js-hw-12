import{a as B,S as H,i as h}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const q="https://pixabay.com/api/",P="42750386-32909fc47eb0ca0c6c8fc758e";async function m(e,o){const n={key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15},s=`${q}`;return(await B.get(s,{params:n})).data}const $=new H(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});function C(e){const{webformatURL:o,largeImageURL:n,tags:s,likes:t,views:r,comments:i,downloads:v}=e;return`
     <li class="gallery-item">
          <a href="${n}" class="photo-link">
            <img class="photo"
                width="360"
                height="152"
                src="${o}" 
                alt="${s}" 
            />
          </a>
          <p class="info-photo-box">
            <span class="info-item"><b>Likes</b><br/>${t}</span>
            <span class="info-item"><b>Views</b><br/>${r}</span>
            <span class="info-item"><b>Comments</b><br/>${i}</span>
            <span class="info-item"><b>Downloads</b><br/>${v}</span>
          </p>
        </li>
    `}function g(e){return e.map(C).join("")}function y(){$.refresh()}const x="/goit-js-hw-12/assets/bi_x-octagon-4f06a8ee.svg",b=document.querySelector(".loader-container"),E=document.querySelector(".search-form"),f=document.querySelector(".gallery"),p=document.querySelector(".load-btn");let c,a=1,L=15;E.addEventListener("submit",M);p.addEventListener("click",O);async function M(e){if(e.preventDefault(),f.innerHTML="",a=1,c=e.target.elements.query.value.trim(),!c){l("Search line is empty"),u();return}S();try{const o=await m(c,a);if(o.totalHits===0){d(),l("Sorry, there are no images matching <br/> your search query. Please, try again!");return}w(`We found ${o.totalHits} photos`);const n=g(o.hits);f.innerHTML=n,y(),o.totalHits<L?d():R()}catch{l("Something went wrong!!!")}finally{u(),e.target.reset()}}async function O(){a+=1,S();try{const e=await m(c,a),o=Math.ceil(e.totalHits/L),n=g(e.hits);f.insertAdjacentHTML("beforeend",n),y(),o===a&&(d(),w("We're sorry, but you've reached the end of search results"))}catch{l("Something went wrong!!!")}finally{u()}I()}function I(){const e=f.querySelector(".gallery-item"),n={top:Number.parseInt(e.getBoundingClientRect().height)*2,behavior:"smooth"};window.scrollBy(n)}function w(e){return h.info({title:"",message:e,position:"topRight"})}function l(e){return h.error({title:"",backgroundColor:"#c55f5f",titleColor:"#fff",messageColor:"#fff",message:e,iconUrl:x,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function S(){return b.classList.remove("is-hidden")}function u(){return b.classList.add("is-hidden")}function R(){p.classList.remove("is-hidden")}function d(){p.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
