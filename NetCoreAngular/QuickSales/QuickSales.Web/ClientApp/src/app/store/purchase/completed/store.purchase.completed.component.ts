import { Component, OnInit } from "@angular/core";

@Component({
  selector: "purchase-completed",
  templateUrl: "./store.purchase.completed.component.html"
})
export class StorePurchaseCompletedComponent implements OnInit {
  public purchaseOrderId: string;

  constructor() {

  }
  ngOnInit(): void {
    this.purchaseOrderId = sessionStorage.getItem("purchaseOrderId");
  }
}
