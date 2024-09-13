const CartModule = (function () {
    // Private cart array
    let cart = [];

    // Private method to calculate total
    function calculateTotal() {
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }

    // Publicly accessible methods
    return {
        addItem: function (product, quantity) {
            const existingItem = cart.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ product, quantity });
            }
            console.log(`${product.name} added to cart. Quantity: ${quantity}`);
        },
        removeItem: function (productId) {
            cart = cart.filter(item => item.product.id !== productId);
            console.log(`Item with id ${productId} removed from cart.`);
        },
        getCart: function () {
            return cart;
        },
        getTotal: function () {
            return calculateTotal();
        }
    };
})();


module.exports = CartModule;
