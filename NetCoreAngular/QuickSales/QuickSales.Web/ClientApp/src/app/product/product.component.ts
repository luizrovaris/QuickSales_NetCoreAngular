import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product/product.service";
import { Product } from "../model/product";

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  public product: Product;
  public selectedFile: File;

  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.product = new Product();
  }

  public save() {
    this.productService.save(this.product)
      .subscribe(
        productJson => {

        },
        err => {

        }
      );
  }

  public inputChange(files: FileList) {
    this.selectedFile = files.item(0);
    this.productService.sendFile(this.selectedFile)
      .subscribe(
        response => {
        },
        e => {
          console.log(e.error)
        });
  }
}
