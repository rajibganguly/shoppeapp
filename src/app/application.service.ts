import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers } from '@angular/http';
import { environment } from '../environments/environment';

import { Item } from './model/model.module';

@Injectable({
  providedIn: 'root'
})


export class ApplicationService {
  baseUrl = environment.dataApi;
  cartItem = environment.cartItem;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    // const httpheader = {headers: new headers({ 'Content-Type': 'application/json' })};
   }

  myTotalReturnItems() {
    return this.http.get(this.baseUrl);
  }

  myTotalCartItems() {
    return this.http.get(this.cartItem);
  }


  myCartItems(id: number, data: object) {
    this.http.post(this.cartItem , data).subscribe((d) => {
      console.log(d);
    });
  }

  myCartDeleteItems(id: number) {
    if (confirm('Are your sure to delete?')) {
      const url = `${this.cartItem}/${id}`;
      console.log(url);
      return this.http.delete(url).toPromise().then((x) => {
        console.log(x);
        location.reload();
      });
    }
  }

}
