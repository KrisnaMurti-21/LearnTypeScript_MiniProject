import { CartService } from "./services/cartService";
import { productService } from "./services/productService";

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
