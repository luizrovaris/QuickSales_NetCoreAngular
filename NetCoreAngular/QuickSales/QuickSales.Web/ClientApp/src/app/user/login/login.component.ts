import { Component } from "@angular/core";
import { User } from "../../model/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

  public user;

  constructor(private router: Router) {
    this.user = new User();
  }

  login(): void {
    if (this.user.email == 'lr@mail.com' && this.user.password == '1234') {
      sessionStorage.setItem('authenticated-user', '1');
      this.router.navigate(['/']);
    }
  }
}
