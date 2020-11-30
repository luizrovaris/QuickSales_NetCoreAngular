import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../../model/product";
import { ProductService } from "../../services/product/product.service";

@Component({
  selector: "product-search",
  templateUrl: "./product.search.component.html",
  styleUrls: ["./product.search.component.css"]
})
export class ProductSearchComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService, private router: Router) {
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

  public addProduct() {
    this.router.navigate(['/product']);
  }

  public removeProduct(productId: number) {
    if (confirm("Are you sure you want to permanently delete this product?") == true) {
      this.productService.delete(productId).subscribe(
        products => {
          this.products = products;
        },
        e => {
          console.log(e.error);
        }
      );
    }
  }
}
