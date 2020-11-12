import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private route: Router, private userService: UserService) {
  }

  get user() {
    return this.userService.user;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public hasAuthenticatedUser(): boolean {
    return this.userService.hasAuthenticatedUser();
  }

  public logout() {
    this.userService.clearSession();
    this.route.navigate(['/']);
  }
}
