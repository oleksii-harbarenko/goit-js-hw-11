import{a as u,S as p,i as c}from"./assets/vendor-D3PmPE7A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="48876582-9b859673e779d9e5d61f29cd8",m="https://pixabay.com/api/";function f(s){const r=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=m+`?${r}`;return u.get(o)}function g(s){const r=document.querySelector(".gallery"),o=s.map(e=>`
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
    `).join("");r.insertAdjacentHTML("afterbegin",o),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const l=document.querySelector(".search-form"),h=document.querySelector(".search-input"),i=document.querySelector(".wait-message");l.addEventListener("submit",s=>{s.preventDefault();let r=h.value.trim();if(!r){c.warning({title:"Error",message:"Input search string",position:"topRight"});return}i.innerHTML='Loading images, please wait...<span class="loader"></span>',f(r).then(o=>{o.data.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g(o.data.hits),i.textContent=""}).catch(o=>{i.textContent="Something went wrong ...",console.log(o)}),l.reset()});
//# sourceMappingURL=index.js.map
