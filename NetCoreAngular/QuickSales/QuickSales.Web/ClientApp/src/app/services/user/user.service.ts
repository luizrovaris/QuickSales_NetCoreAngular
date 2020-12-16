import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../model/user";

@Injectable({
  providedIn: "root"
})
export class UserService {

  private baseUrl: string;
  private _user: User;
  get user(): User {
    let user_json = sessionStorage.getItem('authenticated-user');
    this._user = JSON.parse(user_json);
    return this._user;
  }
  set user(user: User) {
    sessionStorage.setItem('authenticated-user', JSON.stringify(user));
    this._user = user;
  }

  get header(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public hasAuthenticatedUser() : boolean {
    return this._user != null;
  }

  public isAdminUser(): boolean {
    return this.hasAuthenticatedUser() && this.user.isAdministrator;
  }

  public clearSession() {
    sessionStorage.setItem('authenticated-user', '');
    this._user = null;
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public checkUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + "api/user/login", JSON.stringify(user), { headers: this.header });
  }

  public saveUser(user: User) : Observable<User> {
    return this.http.post<User>(this.baseUrl + "api/user", JSON.stringify(user), { headers: this.header });
  }
}
