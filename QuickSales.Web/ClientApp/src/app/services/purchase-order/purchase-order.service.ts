import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { PurchaseOrder } from "../../model/purchaseOrder";

@Injectable({
  providedIn: "root"
})
export class PurchaseOrderService {
  public baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get header(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public savePurchaseOrder(purchaseOrder: PurchaseOrder): Observable<number> {
    return this.http.post<number>(this.baseUrl + "api/purchaseorder", JSON.stringify(purchaseOrder), { headers: this.header });
  }
}
