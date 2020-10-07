import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private route: Router) {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public hasAuthenticatedUser(): boolean {
    return sessionStorage.getItem('authenticated-user') == '1';
  }

  public logout() {
    sessionStorage.setItem('authenticated-user', '');
    this.route.navigate(['/']);
  }
}
