import { Component } from "@angular/core";

@Component({
  selector: "product"
})
export class ProductComponent {
  public name: string;

  public getName(): string {
    return this.name;
  }
}
