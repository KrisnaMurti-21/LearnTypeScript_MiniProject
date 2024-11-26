"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cartService_1 = require("./services/cartService");
const productService_1 = require("./services/productService");
function runApp() {
    const cartService = new cartService_1.CartService();
    window.alert(productService_1.productService.getProducts());
    while (true) {
        const input = window.prompt(`Enter product code and quantity (sparated by space), or type 'pay' to checkout: `);
        if (!input) {
            break;
        }
        if (input.toLocaleLowerCase() === "pay") {
            cartService.pay();
            break;
        }
        const [code, qtyStr] = input.split(" ");
        const quantityNumber = Number(qtyStr);
        if (isNaN(quantityNumber) || quantityNumber <= 0) {
            window.alert("Invalid quantity");
            continue;
        }
        cartService.addProductToCart(code, quantityNumber);
        cartService.showCart();
    }
    window.alert("Thank you for shopping with us!");
}
(_a = document.getElementById("run")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", runApp);
