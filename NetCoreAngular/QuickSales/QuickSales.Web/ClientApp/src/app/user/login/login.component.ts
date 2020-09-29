import { Component } from "@angular/core";
import { User } from "../../model/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

  public user;

  constructor() {
    this.user = new User();
  }

  login(): void {
    alert(this.user.email);
  }
}
