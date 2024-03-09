import{S as m,i as a}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const h="https://pixabay.com/api/",g="42750386-32909fc47eb0ca0c6c8fc758e";function d(t){const r=new URLSearchParams({key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),n=`${h}?${r}`;return fetch(n).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const y=new m(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});function b(t){const{webformatURL:r,largeImageURL:n,tags:s,likes:e,views:o,comments:i,downloads:p}=t;return`
     <li class="gallery-item">
          <a href="${n}" class="photo-link">
            <img class="photo"
                width="360"
                height="152"
                src="${r}" 
                alt="${s}" 
            />
          </a>
          <p class="info-photo-box">
            <span class="info-item"><b>Likes</b><br/>${e}</span>
            <span class="info-item"><b>Views</b><br/>${o}</span>
            <span class="info-item"><b>Comments</b><br/>${i}</span>
            <span class="info-item"><b>Downloads</b><br/>${p}</span>
          </p>
        </li>
    `}function L(t){return t.map(b).join("")}function w(){y.refresh()}const f="/goit-js-hw-12/assets/bi_x-octagon-4f06a8ee.svg",u=document.querySelector(".loader-container"),B=document.querySelector(".search-form"),c=document.querySelector(".gallery");B.addEventListener("submit",C);function C(t){t.preventDefault(),c.innerHTML="";const r=t.target.elements.query.value.trim();if(!r){E(),l();return}v(),d(r).then(n=>{if(n.totalHits===0)return S();const s=L(n.hits);c.innerHTML=s,w()}).catch(()=>$("Something went wrong!!!")).finally(l),t.target.reset()}function S(){return a.error({title:"",backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",message:"Sorry, there are no images matching <br/> your search query. Please, try again!",iconUrl:f,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function E(){return a.error({title:"",backgroundColor:"#c55f5f",titleColor:"#fff",messageColor:"#fff",message:"Search line is empty",iconUrl:f,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function $(t){return a.error({title:"",backgroundColor:"#c55f5f",titleColor:"#fff",messageColor:"#fff",message:t,icon:!1,color:"#fff",position:"topRight",progressBarColor:"#B51B1B"})}function v(){return u.classList.remove("is-hidden")}function l(){return u.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
