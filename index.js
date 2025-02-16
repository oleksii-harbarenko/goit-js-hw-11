import{a as u,S as p,i}from"./assets/vendor-D3PmPE7A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="48876582-9b859673e779d9e5d61f29cd8",m="https://pixabay.com/api/";function d(s){const r=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=m+`?${r}`;return u.get(o)}function f(s){const r=document.querySelector(".gallery"),o=s.map(e=>`
        <li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
            <div class="image-info">
                <p>👍 ${e.likes}</p>
                <p>👁️ ${e.views}</p>
                <p>💬 ${e.comments}</p>
                <p>⬇️ ${e.downloads}</p>
            </div>
          </a>
        </li>
    `).join("");r.insertAdjacentHTML("afterbegin",o),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const c=document.querySelector(".search-form"),h=document.querySelector(".search-input"),l=document.querySelector(".wait-message");c.addEventListener("submit",s=>{s.preventDefault();let r=h.value.trim();if(!r){i.warning({title:"Error",message:"Input search string",position:"topRight"});return}l.innerHTML='Loading images, please wait...<span class="loader"></span>',document.querySelector(".gallery").innerHTML="",d(r).then(o=>{o.data.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):f(o.data.hits),l.textContent=""}).catch(o=>{i.error({title:"Error",message:"Something went wrong. Please try again",position:"topRight"}),console.log(o)}).finally(()=>{l.textContent=""}),c.reset()});
//# sourceMappingURL=index.js.map
