import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../../model/product";

@Injectable({
  providedIn: "root"
})
export class ProductService implements OnInit {
  private baseUrl: string;
  public products: Product[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  ngOnInit(): void {
    this.products = [];
  }

  get header(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public save(product: Product) {
    return this.http.post<Product>(this.baseUrl + "api/product", JSON.stringify(product), { headers: this.header });
  }

  public delete(productId: number): Observable<Product[]> {
    return this.http.delete<Product[]>(this.baseUrl + "api/product/" + productId);
  }

  public getAll() : Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "api/product", { headers: this.header });
  }

  public get(productId: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + "api/product/" + productId, { headers: this.header });
  }

  public sendFile(selectedFile: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('selectedFile', selectedFile, selectedFile.name);
    return this.http.post<string>(this.baseUrl + 'api/product/file', formData);
  }
}
