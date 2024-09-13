const ProductsModule = (function () {
    // Private product list
    const products = [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Phone', price: 800 },
        { id: 3, name: 'Tablet', price: 500 },
    ];

    // Publicly accessible methods
    return {
        getAllProducts: function () {
            return products;
        },
        getProductById: function (id) {
            return products.find(product => product.id === id);
        }
    };
})();

module.exports = ProductsModule;