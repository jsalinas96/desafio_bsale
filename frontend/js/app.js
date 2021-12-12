import "../css/style.css";
import ProductService from "../services/ProductService";

//Default filter params
var category = '1';
var orderBy = 'asc';
var search = '';

//Get orderBySelect value
var orderBySelect = document.getElementById("orderBySelect");
orderBySelect.addEventListener("change", function () {
    orderBy = this.value;
    console.log(this.value);
    renderData(category, orderBy);
});

//Get categoryTag value
document.querySelectorAll(".category-tag").forEach((item) => {
    item.addEventListener("click", (e) => {
        category = e.target.getAttribute("id");
        //Si el elemento no tiene la clase selected
        if(!e.target.classList.contains('selected')){
            //Quitar a todos los elementos la clase 'selected'
            document.querySelectorAll(".category-tag").forEach( x => {
                x.classList.remove('selected')
            });
            //Asignar la clase 'selected' al elemento clickeado
            document.getElementById(category).classList.add('selected');
            console.log(category);
            renderData(category, orderBy);   
        }
    });
});

//Get Search value
document.querySelectorAll("button[type='submit'").forEach((item) => {
    item.addEventListener("click", function () {
        search = document.getElementById("search").value;
        if(search) {
            console.log(search);
        } else {
            console.log("esta wea está vacía");
        }
    });
});

//Render on load
window.onload = function() {
    var select = document.getElementById("orderBySelect");
    select.value = 'asc';
    renderData(category, orderBy);
};

//Get Data from API and Render Products
function renderData(category, orderBy){
    const productsView = document.getElementById("productsView");
    productsView.innerHTML = '';
    // Instatiating Product
    const products = new ProductService();
    products.getProducts(category, orderBy).then(data => {
        document.getElementById("numberOfResults").innerHTML = 'Resultados encontrados: ' + data.length;
        //Render products
        data.forEach(product => {
            const div = document.createElement("div");
            div.className = "col-md-3 my-3";
            div.innerHTML = `
                <div class="card product-card">
                    <div class="card-body">
                        <img src="${product.url_image}" alt="">
                        <h3 class="product-name">${product.name}</h3>
                    </div>
                    <div class="card-footer pb-3">
                        <div class="d-flex flex-column justify-content-around align-items-center">
                            <span class="text-success fs-5 py-2">$${product.price}</span>
                            <button type="button" class="btn btn-success rounded-pill pt-0">
                                <i class="bi bi-cart-plus-fill fs-5"></i>
                                Añadir al carro
                            </button>
                        </div>
                    </div>
                </div>`;
            productsView.appendChild(div);
        });
    });
}