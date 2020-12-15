import { Component, OnInit } from "@angular/core";
import { StoreBasket } from "../basket/store.basket";
import { Product } from "../../model/product";

@Component({
  selector: "store-purchase",
  templateUrl: "./store.purchase.component.html",
  styleUrls: ["./store.purchase.component.css"]
})
export class StorePurchaseComponent implements OnInit {
  public basket: StoreBasket;
  public products: Product[];

  ngOnInit(): void {
    this.basket = new StoreBasket();
    this.products = this.basket.getProducts();
  }

  public updatePrice(product: Product, quantity: number) {

    if (!product.priceIndividual) {
      product.priceIndividual = product.price;
    }

    product.price = product.priceIndividual * quantity;
  }
}
