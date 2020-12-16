import { Component, OnInit } from "@angular/core";
import { StoreBasket } from "../basket/store.basket";
import { Product } from "../../model/product";
import { Router } from "@angular/router";
import { PurchaseOrder } from "../../model/purchaseOrder";
import { UserService } from "../../services/user/user.service";
import { PurchaseOrderItem } from "../../model/purchaseOrderItem";

@Component({
  selector: "store-purchase",
  templateUrl: "./store.purchase.component.html",
  styleUrls: ["./store.purchase.component.css"]
})
export class StorePurchaseComponent implements OnInit {
  public basket: StoreBasket;
  public products: Product[];
  public total: number;

  constructor(private router: Router, private userService: UserService) {

  }
  ngOnInit(): void {
    this.basket = new StoreBasket();
    this.products = this.basket.getProducts();
    this.updateTotalPrice();
  }

  public updatePrice(product: Product, quantity: number) {

    if (quantity <= 0) {
      quantity = 1;
      product.quantity = quantity;
    }

    if (!product.priceIndividual) {
      product.priceIndividual = product.price;
    }

    product.price = product.priceIndividual * quantity;

    this.basket.updateProducts(this.products);
    this.updateTotalPrice();
  }

  public removeProduct(product: Product) {
    this.basket.removeProduct(product);
    this.products = this.basket.getProducts();
    this.updateTotalPrice();

    if (this.products.length < 1) {
      this.router.navigate(["/"]);
    }
  }

  public updateTotalPrice() {
    this.total = this.products.reduce((qt, product) => qt + product.price, 0);
  }

  public purchaseOrder() {
    let purchaseOrder = this.createPurchaseOrder();
  }

  public createPurchaseOrder() : PurchaseOrder {
    let purchaseOrder = new PurchaseOrder();
    purchaseOrder.userId = this.userService.user.id;
    purchaseOrder.purchaseOrderDate = new Date();

    this.products = this.basket.getProducts();

    for (let product of this.products) {
      let purchaseOrderItem = new PurchaseOrderItem();

      purchaseOrderItem.ProductId = product.id;
      purchaseOrderItem.quantity = product.quantity ? product.quantity : 1;

      purchaseOrder.purchaseOrderItems.push(purchaseOrderItem);
    }

    //Mock:
    purchaseOrder.postalCode = "1234";
    purchaseOrder.city = "City";
    purchaseOrder.address = "Address";
    purchaseOrder.addressNumber = "100";
    purchaseOrder.expectedDeliveryDate = new Date();
    purchaseOrder.paymentMethodId = 1;

    return purchaseOrder;
  }
}
