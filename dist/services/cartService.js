"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const productService_1 = require("./productService");
class CartService {
    constructor() {
        this.carts = [];
    }
    addProductToCart(code, qty) {
        const product = productService_1.productService.getProductByUniqueProperty("code", code);
        if (!product) {
            window.alert("Invalid product code!");
            return;
        }
        this.carts.push({ product, qty });
        window.alert(`${product.name} added to cart (${qty} pcs)`);
    }
    showCart() {
        let cartlist = "Cart:\n";
        let total = 0;
        for (const cart of this.carts) {
            const subtotal = cart.product.price * cart.qty;
            total += subtotal;
            cartlist += `${cart.product.name} - ${cart.qty} = Rp.${subtotal}\n`;
        }
        cartlist += `Total: Rp.${total}`;
        window.alert(cartlist);
    }
    pay() {
        const amount = Number(window.prompt("Enter the amount: "));
        if (!amount) {
            window.alert("Payment Cancelled");
            return;
        }
        const total = this.carts.reduce((acc, cart) => {
            return acc + cart.product.price * cart.qty;
        }, 0);
        const change = amount - total;
        if (change < 0) {
            window.alert(`Not enough money. Change: Rp.${change * -1}`);
        }
        else {
            window.alert(`Payment Successful. Change: Rp.${change}`);
            this.carts = [];
        }
    }
}
exports.CartService = CartService;
