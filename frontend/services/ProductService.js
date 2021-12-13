class ProductService {

    constructor() {
        this.URL = '/api/product';
    }

    async getProducts(search, orderBy, category) {
        const response = await fetch(this.URL + '?search=' + search + '&orderBy=' + orderBy + '&category=' + category);
        const products = response.json();
        return products;
    }
}

export default ProductService;