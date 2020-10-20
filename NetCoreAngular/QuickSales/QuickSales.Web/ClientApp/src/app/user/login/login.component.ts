import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user;
  public returnUrl: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.user = new User();
  }

  login(): void {
    if (this.user.email == 'lr@mail.com' && this.user.password == '1234') {
      sessionStorage.setItem('authenticated-user', '1');

      this.router.navigate([(this.returnUrl ? this.returnUrl : '/')]);
    }
  }
}
