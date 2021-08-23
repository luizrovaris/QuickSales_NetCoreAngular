import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { StoreBasket } from '../store/basket/store.basket';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  public basket: StoreBasket;

  constructor(private route: Router, private userService: UserService) {
  }
  ngOnInit(): void {
    this.basket = new StoreBasket();
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

  public isAdminUser() : boolean {
    return this.userService.isAdminUser();
  }

  public logout() {
    this.userService.clearSession();
    this.route.navigate(['/']);
  }

  public isBasketEmpty(): boolean {
    return this.basket.isBasketEmpty();
  }
}
