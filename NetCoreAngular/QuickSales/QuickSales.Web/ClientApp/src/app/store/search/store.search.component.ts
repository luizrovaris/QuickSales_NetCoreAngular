import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product/product.service";
import { Product } from "../../model/product";

@Component({
  selector: "app-store",
  templateUrl: "./store.search.component.html",
  styleUrls: ["./store.search.component.css"]
})
export class StoreSearchComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(
      products => {
        this.products = products;
      },
      e => {
        console.log(e.error);
      }
    );
  }
  ngOnInit(): void {
  }

  public openProductDetail(product: Product) {

  }
}
