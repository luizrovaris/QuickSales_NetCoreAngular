import { Component, OnInit } from "@angular/core";
import { Product } from "../../model/product";
import { Router } from "@angular/router";
import { StoreBasket } from "../basket/store.basket";

@Component({
  selector: "store-app-product",
  templateUrl: "./store.product.component.html",
  styleUrls: ["./store.product.component.css"]
})
export class StoreProductComponent implements OnInit {
  public product: Product;
  public basket: StoreBasket;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.basket = new StoreBasket();
    var productOnSession = sessionStorage.getItem('productDetailSession');
    if (productOnSession) {
      this.product = JSON.parse(productOnSession);
    }
  }

  public buy() {
    this.basket.addProduct(this.product);
    this.router.navigate(['/store-purchase']);
  }
}
