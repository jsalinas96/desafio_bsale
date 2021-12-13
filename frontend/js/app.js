import "../css/style.css";
import ProductService from "../services/ProductService";


//Default filter params
var search = '';
var orderBy = 'asc';
var category = '1';


//Get Search value...
const inputSearch = document.getElementById("search");
//on click search button
document.querySelectorAll("button[type='submit'].search-btn").forEach((item) => {
    item.addEventListener("click", function () {
        search = inputSearch.value;
        if(search){
            category='';
            document.querySelectorAll(".category-tag").forEach( x => {
                x.classList.remove('selected')
            });
            renderData(search, orderBy, category); 
        }
    });
});
//pressing 'Enter'
inputSearch.addEventListener("keyup", function(e) {
    if(e.key === 'Enter'){
        search = inputSearch.value;
        if(search){
            category='';
            document.querySelectorAll(".category-tag").forEach( x => {
                x.classList.remove('selected')
            });
            renderData(search, orderBy, category); 
        }
    }
});


//Get orderBy value
const inputSelect = document.getElementById("orderBySelect");
inputSelect.addEventListener("change", function () {
    orderBy = this.value;
    renderData(search, orderBy, category); 
});


//Get category value
document.querySelectorAll(".category-tag").forEach((item) => {
    item.addEventListener("click", (e) => {
        category = e.target.getAttribute("id");
        search = '';
        inputSearch.value = '';
        if(!e.target.classList.contains('selected')){
            document.querySelectorAll(".category-tag").forEach( x => {
                x.classList.remove('selected')
            });
            document.getElementById(category).classList.add('selected');
            renderData(search, orderBy, category);   
        }
    });
});


//Render on load
window.onload = function() {
    inputSelect.value = 'asc';
    inputSearch.value = '';
    renderData(search, orderBy, category); 
};


//Get Data from API and Render Products
function renderData(search, orderBy, category){
    const productsView = document.getElementById("productsView");
    productsView.innerHTML = '';
    // Instatiating Product
    const products = new ProductService();
    products.getProducts(search, orderBy, category).then(data => {
        document.getElementById("numberOfResults").innerHTML = 'Resultados encontrados: ' + data.length;
        //Render products
        data.forEach(product => {
            const div = document.createElement("div");
            div.className = "col-xl-3 col-lg-4 col-md-6 col-12 my-3";
            div.innerHTML = `
                <div class="card product-card text-center">
                    <div class="card-body">
                        <img src="${product.url_image}" alt="">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="offer-tag" id="offer-tag-${product.id}">
                            <span id="dcto-${product.id}"></span>
                        </div>
                    </div>
                    <div class="card-footer pb-3">
                        <div class="price p-2">
                            <span class="text-secondary fs-6 px-1 text-decoration-line-through" id="old-price-${product.id}"></span>
                            <span class="text-success fs-5 px-1" id="price-${product.id}">${formatterPeso.format(product.price)}</span>
                        </div>
                        <button type="button" class="btn btn-success rounded-pill pt-0">
                            <i class="bi bi-cart-plus-fill fs-5"></i>
                            Añadir al carro
                        </button>
                    </div>
                </div>`;
            productsView.appendChild(div);
            discount(product.price, product.discount, product.id);
        });
    });
}


//Apply discount to products
function discount(price, discount, id){
    if(discount == '0'){
        document.getElementById("offer-tag-"+id).style.display = 'none';
        document.getElementById("old-price-"+id).style.display = 'none';
    } else {
        document.getElementById("dcto-"+id).innerHTML = discount+'% dcto';
        document.getElementById("old-price-"+id).innerHTML = formatterPeso.format(price);
        var newPrice = price - (price * discount/100);
        document.getElementById("price-"+id).innerHTML = formatterPeso.format(newPrice);
    }
}


//Format CLP
const formatterPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
});
