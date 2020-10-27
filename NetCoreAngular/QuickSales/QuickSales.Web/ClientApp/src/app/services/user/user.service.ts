import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../model/user";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public checkUser(user: User): Observable<User> {
    const header = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      email: user.email,
      password: user.password
    };

    return this.http.post<User>(this.baseUrl + "api/user", body, { headers: header });
  }
}
