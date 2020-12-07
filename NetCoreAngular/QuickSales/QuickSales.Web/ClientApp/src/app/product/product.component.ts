import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
  public activateSpinner: boolean;
  public message: string;

  constructor(private productService: ProductService, private router: Router) {

  }
  ngOnInit(): void {
    var productOnSession = sessionStorage.getItem('productEditSession');
    if (productOnSession === null) {
      this.product = JSON.parse(productOnSession);
      sessionStorage.setItem('productEditSession', null);
    } else {
      this.product = new Product();
    }
  }

  public save() {
    this.activateSpinner = true;
    this.productService.save(this.product)
      .subscribe(
        productJson => {
          this.activateSpinner = false;
          this.router.navigate(['/product-search']);
        },
        e => {
          this.message = e.error;
          this.activateSpinner = false;
        }
      );
  }

  public inputChange(files: FileList) {
    this.selectedFile = files.item(0);
    this.activateSpinner = true;

    this.productService.sendFile(this.selectedFile)
      .subscribe(
        fileName => {
          this.product.file = fileName;
          this.activateSpinner = false;
        },
        e => {
          console.log(e.error)
          this.activateSpinner = false;
        });
  }
}
