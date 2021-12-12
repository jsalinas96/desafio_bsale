class ProductService {

    constructor() {
        this.URL = 'http://localhost:3000/api/product';
    }

    async getProducts(category, orderBy) {
        const response = await fetch(this.URL + '?category='+category+'&orderBy='+orderBy);
        const products = response.json();
        return products;
    }
}

export default ProductService;