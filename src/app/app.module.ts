import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MainrouteRoutingModule } from './mainroute/mainroute-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ApplicationService } from './application.service';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MainrouteRoutingModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
