import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//import { TruncateModule } from 'ng2-truncate'; //description | truncate: 50

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterUserComponent } from './user/register/register.user.component';
import { RouteGuards } from './authorization/route.guards';
import { UserService } from './services/user/user.service';
import { ProductService } from './services/product/product.service';
import { ProductSearchComponent } from './product/search/product.search.component';
import { StoreSearchComponent } from './store/search/store.search.component';
import { StoreProductComponent } from './store/product/store.product.component';
import { StorePurchaseComponent } from './store/purchase/store.purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    RegisterUserComponent,
    ProductSearchComponent,
    StoreSearchComponent,
    StoreProductComponent,
    StorePurchaseComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    //TruncateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'product', component: ProductComponent, canActivate: [RouteGuards]},
      { path: 'login', component: LoginComponent },
      { path: 'register-user', component: RegisterUserComponent },
      { path: 'product-search', component: ProductSearchComponent, canActivate: [RouteGuards] },
      { path: 'store-product', component: StoreProductComponent },
      { path: 'store-purchase', component: StorePurchaseComponent, canActivate: [RouteGuards] }
    ])
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
