import { Product } from "../../model/product";

export class StoreBasket {
  public products: Product[] = [];

  public addProduct(product: Product) {
    var productsLocalStorage = localStorage.getItem("productsLocalStorage");

    if (productsLocalStorage) {
      this.products = JSON.parse(productsLocalStorage);
    }

    this.products.push(product);
    localStorage.setItem("productsLocalStorage", JSON.stringify(this.products));
  }

  public getProducts(): Product[] {
    var productsLocalStorage = localStorage.getItem("productsLocalStorage");

    if (productsLocalStorage) {
      this.products = JSON.parse(productsLocalStorage);
    }

    return this.products;
  }

  public deleteProduct(product: Product) {

  }
}
