import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

import { Item } from '../model/model.module';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private allItems = [];
  noticeMsg = false;
  noticeMsgTxt: string;

  constructor(private service: ApplicationService) {


  }

  ngOnInit() {
    return this.service.myTotalReturnItems().subscribe(
      (data) => {
        const localAllItems = data.json();
        localAllItems.forEach((x) => {
          this.allItems = x.available;
        })
      }
    );

  }

  submitToCart(evt, obj) {
    const localCart = {
      amount: obj.amount,
      description: obj.description,
      id: obj.id,
      link: obj.link,
      name: obj.name,
      type: obj.type
    };
    this.noticeMsg = true;
    setTimeout( () => {
      this.noticeMsg = false;
      location.reload();
    }, 2000);
    console.log(localCart);
    this.service.myCartItems(obj.id, localCart);
    this.noticeMsgTxt = `${obj.name} added into your cart successfully `;

  }

}
