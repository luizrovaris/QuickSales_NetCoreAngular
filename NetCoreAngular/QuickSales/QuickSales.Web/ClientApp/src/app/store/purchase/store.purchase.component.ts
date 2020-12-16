import { Component, OnInit } from "@angular/core";
import { StoreBasket } from "../basket/store.basket";
import { Product } from "../../model/product";
import { Router } from "@angular/router";

@Component({
  selector: "store-purchase",
  templateUrl: "./store.purchase.component.html",
  styleUrls: ["./store.purchase.component.css"]
})
export class StorePurchaseComponent implements OnInit {
  public basket: StoreBasket;
  public products: Product[];
  public total: number;

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.basket = new StoreBasket();
    this.products = this.basket.getProducts();
    this.updateTotalPrice();
  }

  public updatePrice(product: Product, quantity: number) {

    if (quantity <= 0) {
      quantity = 1;
      product.quantity = quantity;
    }

    if (!product.priceIndividual) {
      product.priceIndividual = product.price;
    }

    product.price = product.priceIndividual * quantity;

    this.basket.updateProducts(this.products);
    this.updateTotalPrice();
  }

  public removeProduct(product: Product) {
    this.basket.removeProduct(product);
    this.products = this.basket.getProducts();
    this.updateTotalPrice();

    if (this.products.length < 1) {
      this.router.navigate(["/"]);
    }
  }

  public updateTotalPrice() {
    this.total = this.products.reduce((qt, product) => qt + product.price, 0);
  }
}
