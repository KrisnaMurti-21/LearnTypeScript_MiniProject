"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = exports.ProductService = void 0;
class ProductService {
    constructor() {
        this.products = [
            {
                code: "A",
                name: "Air Mineral",
                price: 5000,
            },
            {
                code: "B",
                name: "Beras",
                price: 10000,
            },
            {
                code: "C",
                name: "Cabe",
                price: 2000,
            },
            {
                code: "D",
                name: "Daging",
                price: 3000,
            },
            {
                code: "E",
                name: "Es Krim",
                price: 4000,
            },
        ];
    }
    getProductByUniqueProperty(property, value) {
        return this.products.find((product) => product[property] === value);
    }
    getProducts() {
        return this.products
            .map((product) => `${product.code} - ${product.name} - ${product.price}`)
            .join("\n");
    }
}
exports.ProductService = ProductService;
exports.productService = new ProductService();
