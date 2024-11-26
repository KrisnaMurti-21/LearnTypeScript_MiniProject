"use strict";
(() => {
  // src/services/productService.ts
  var ProductService = class {
    constructor() {
      this.products = [
        {
          code: "A",
          name: "Air Mineral",
          price: 5e3
        },
        {
          code: "B",
          name: "Beras",
          price: 1e4
        },
        {
          code: "C",
          name: "Cabe",
          price: 2e3
        },
        {
          code: "D",
          name: "Daging",
          price: 3e3
        },
        {
          code: "E",
          name: "Es Krim",
          price: 4e3
        }
      ];
    }
    getProductByUniqueProperty(property, value) {
      return this.products.find((product) => product[property] === value);
    }
    getProducts() {
      return this.products.map((product) => `${product.code} - ${product.name} - ${product.price}`).join("\n");
    }
  };
  var productService = new ProductService();

  // src/services/cartService.ts
  var CartService = class {
    constructor() {
      this.carts = [];
    }
    addProductToCart(code, qty) {
      const product = productService.getProductByUniqueProperty("code", code);
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
        cartlist += `${cart.product.name} - ${cart.qty} = Rp.${subtotal}
`;
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
      } else {
        window.alert(`Payment Successful. Change: Rp.${change}`);
        this.carts = [];
      }
    }
  };

  // src/index.ts
  function runApp() {
    const cartService = new CartService();
    window.alert(productService.getProducts());
    while (true) {
      const input = window.prompt(
        `Enter product code and quantity (sparated by space), or type 'pay' to checkout: `
      );
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
  document.getElementById("run")?.addEventListener("click", runApp);
})();
