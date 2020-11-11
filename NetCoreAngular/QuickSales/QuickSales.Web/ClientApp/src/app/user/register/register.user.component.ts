import { Component, OnInit } from "@angular/core";
import { User } from "../../model/user";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "register-user",
  templateUrl: "./register.user.component.html",
  styleUrls: ["./register.user.component.css"]
})
export class RegisterUserComponent implements OnInit {
  public user: User;
  public activateSpinner: boolean;
  public message: string;
  public userSaved: boolean;

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.user = new User();
  }

  public save() {
    this.activateSpinner = true;
    this.userSaved = false;
    this.message = "";

    this.userService.saveUser(this.user)
      .subscribe(
        userJson => {
          this.userSaved = true;
          this.activateSpinner = false;
        },
        e => {
          this.message = e.error;
          this.activateSpinner = false;
        }
      );
  }
}
