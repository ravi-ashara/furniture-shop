import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage {
  public quantity: number = 1;
  constructor() { }

  addToCart() {

  }

  addToFav() {

  }

  setQuantity(val: any) {
    this.quantity = val === 'Add' ? this.quantity + 1 : this.quantity - 1;
  }
}
