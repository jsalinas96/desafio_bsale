(()=>{"use strict";var e="",t="asc",n="1";const c=document.getElementById("search");document.querySelectorAll("button[type='submit'].search-btn").forEach((s=>{s.addEventListener("click",(function(){(e=c.value)&&(n="",document.querySelectorAll(".category-tag").forEach((e=>{e.classList.remove("selected")})),o(e,t,n))}))})),c.addEventListener("keyup",(function(s){"Enter"===s.key&&(e=c.value)&&(n="",document.querySelectorAll(".category-tag").forEach((e=>{e.classList.remove("selected")})),o(e,t,n))}));const s=document.getElementById("orderBySelect");function o(e,t,n){const c=document.getElementById("productsView");c.innerHTML="",(new class{constructor(){this.URL="/api/product"}async getProducts(e,t,n){return(await fetch(this.URL+"?search="+e+"&orderBy="+t+"&category="+n)).json()}}).getProducts(e,t,n).then((e=>{document.getElementById("numberOfResults").innerHTML="Resultados encontrados: "+e.length,e.forEach((e=>{const t=document.createElement("div");t.className="col-xl-3 col-lg-4 col-md-6 col-12 my-3",t.innerHTML=`\n                <div class="card product-card text-center">\n                    <div class="card-body">\n                        <img src="${e.url_image}" alt="">\n                        <h3 class="product-name">${e.name}</h3>\n                        <div class="offer-tag" id="offer-tag-${e.id}">\n                            <span id="dcto-${e.id}"></span>\n                        </div>\n                    </div>\n                    <div class="card-footer pb-3">\n                        <div class="price p-2">\n                            <span class="text-secondary fs-6 px-1 text-decoration-line-through" id="old-price-${e.id}"></span>\n                            <span class="text-success fs-5 px-1" id="price-${e.id}">${r.format(e.price)}</span>\n                        </div>\n                        <button type="button" class="btn btn-success rounded-pill pt-0">\n                            <i class="bi bi-cart-plus-fill fs-5"></i>\n                            Añadir al carro\n                        </button>\n                    </div>\n                </div>`,c.appendChild(t),function(e,t,n){if("0"==t)document.getElementById("offer-tag-"+n).style.display="none",document.getElementById("old-price-"+n).style.display="none";else{document.getElementById("dcto-"+n).innerHTML=t+"% dcto",document.getElementById("old-price-"+n).innerHTML=r.format(e);var c=e-e*t/100;document.getElementById("price-"+n).innerHTML=r.format(c)}}(e.price,e.discount,e.id)}))}))}s.addEventListener("change",(function(){t=this.value,o(e,t,n)})),document.querySelectorAll(".category-tag").forEach((s=>{s.addEventListener("click",(s=>{n=s.target.getAttribute("id"),e="",c.value="",s.target.classList.contains("selected")||(document.querySelectorAll(".category-tag").forEach((e=>{e.classList.remove("selected")})),document.getElementById(n).classList.add("selected"),o(e,t,n))}))})),window.onload=function(){s.value="asc",c.value="",o(e,t,n)};const r=new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP",minimumFractionDigits:0})})();