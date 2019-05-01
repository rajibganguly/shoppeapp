import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';

import { Item } from '../model/model.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title = 'shoppeapp';
  private cartItems = [];
  totalCartNum = 0;

  constructor(private service: ApplicationService, private router: Router) { }

  ngOnInit() {
    return this.service.myTotalCartItems().subscribe(
      (data) => {
          this.cartItems = data.json();
          this.totalCartNum = this.cartItems.length;
          console.log(this.cartItems.length);
      }
    );


  }

  showPage() {
this.router.navigate(['/shopping']);
  }


}
