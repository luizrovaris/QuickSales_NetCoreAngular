import { Component, OnInit } from "@angular/core";
import { Product } from "../../model/product";

@Component({
  selector: "store-app-product",
  templateUrl: "./store.product.component.html",
  styleUrls: ["./store.product.component.css"]
})
export class StoreProductComponent implements OnInit {
  public product: Product;

  constructor() {

  }
  ngOnInit(): void {
    var productOnSession = sessionStorage.getItem('productDetailSession');
    if (productOnSession) {
      this.product = JSON.parse(productOnSession);
      sessionStorage.setItem('productDetailSession', null);
    }
  }
}
