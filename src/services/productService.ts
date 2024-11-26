import type { Product } from "../models/Product";

export class ProductService {
  private products: Product[] = [
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

  getProductByUniqueProperty<T>(
    property: keyof Product,
    value: T
  ): Product | undefined {
    return this.products.find((product) => product[property] === value);
  }
  getProducts(): string {
    return this.products
      .map((product) => `${product.code} - ${product.name} - ${product.price}`)
      .join("\n");
  }
}

export const productService = new ProductService();
