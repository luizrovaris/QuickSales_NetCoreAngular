import { Component, OnInit } from "@angular/core";
import { Product } from "../../model/product";
import { Router } from "@angular/router";

@Component({
  selector: "store-app-product",
  templateUrl: "./store.product.component.html",
  styleUrls: ["./store.product.component.css"]
})
export class StoreProductComponent implements OnInit {
  public product: Product;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    var productOnSession = sessionStorage.getItem('productDetailSession');
    if (productOnSession) {
      this.product = JSON.parse(productOnSession);
    }
  }

  public buy() {
    this.router.navigate(['/store-purchase']);
  }
}
