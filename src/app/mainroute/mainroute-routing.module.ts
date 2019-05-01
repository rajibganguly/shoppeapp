import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';
import { MainComponent } from '../main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'  },
  { path: 'shopping', component: ShoppingcartComponent  }
];

export const MainrouteRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
