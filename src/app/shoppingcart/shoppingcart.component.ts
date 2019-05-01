import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

import { Item } from '../model/model.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  private allItems = [];

  constructor(private service: ApplicationService, private router: Router) { }

  ngOnInit() {
    return this.service.myTotalCartItems().subscribe(
      (data) => {
        this.allItems = data.json();
      }
    );
  }

  removeCart(evt, obj) {
    const localCart = {
      amount: obj.amount,
      description: obj.description,
      id: obj.id,
      link: obj.link,
      name: obj.name,
      type: obj.type
    };

    this.service.myCartDeleteItems(obj.id);
  }

  returnShop() {
    this.router.navigate(['/']);
  }

}

