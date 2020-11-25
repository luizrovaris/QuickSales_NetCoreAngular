import { Component, OnInit } from "@angular/core";
import { Product } from "../../model/product";
import { ProductService } from "../../services/product/product.service";

@Component({
  selector: "product-search",
  templateUrl: "./product.search.component.html",
  styleUrls: ["./product.search.component.css"]
})
export class ProductSearchComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService) {
    this.getAllProducts();
  }

  ngOnInit(): void {
  }

  public getAllProducts() {
    this.productService.getAll()
      .subscribe(
        products => {
          this.products = products;
        },
        e => {
          console.log(e.error);
        }
      );
  }
}
