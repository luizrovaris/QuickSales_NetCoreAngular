import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user;
  public returnUrl: string;
  public message: string;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private userService: UserService) {
  }
  ngOnInit(): void {
    this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
    this.user = new User();
  }

  login(): void {
    this.userService.checkUser(this.user)
      .subscribe(
        data => {
          var user: User;
          user = data;

          sessionStorage.setItem('authenticated-user', '1');
          sessionStorage.setItem('user-mail', user.email);

          if (this.returnUrl == null) {
            this.router.navigate(['/']);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        err => {
          console.log(err.error);
          this.message = err.error;
        }
      );
  }
}
