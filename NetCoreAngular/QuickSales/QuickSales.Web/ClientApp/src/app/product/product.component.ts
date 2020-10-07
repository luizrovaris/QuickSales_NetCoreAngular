import { Component } from "@angular/core";

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
})
export class ProductComponent {
  public name: string;

  public getName(): string {
    return this.name;
  }
}
