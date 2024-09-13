const ProductsModule = require('./products');
const CartModule = require('./cart');

console.log("Available Products:");
console.log(ProductsModule.getAllProducts());

const product1 = ProductsModule.getProductById(1);
const product2 = ProductsModule.getProductById(2);

// Add items to the cart
CartModule.addItem(product1, 2); // Adding 2 Laptops to the cart
CartModule.addItem(product2, 1); // Adding 1 Phone to the cart

// Get cart details
console.log("Cart Items:");
console.log(CartModule.getCart());

// Total price
console.log("Total Price:");
console.log(CartModule.getTotal());

// Remove an item from the cart
CartModule.removeItem(product1.id);

// Cart after removal
console.log("Cart Items After Removal:");
console.log(CartModule.getCart());
