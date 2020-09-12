import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  isDelete: boolean = false;
  addDeletedItem: any = [];
  cartArray: any = [{
    id: 1,
    price: 1225.00,
    quantity: 2
  }, {
    id: 2,
    price: 125.00,
    quantity: 3
  }, {
    id: 3,
    price: 10225.00,
    quantity: 5
  }, {
    id: 4,
    price: 765.00,
    quantity: 1
  }, {
    id: 5,
    price: 5695.00,
    quantity: 3
  }];
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  deleteCartItem() {
    this.isDelete = !this.isDelete;
    if (!this.isDelete) {
      this.addDeletedItem = [];
    }
  }

  async deleteSelectedItems() {
    if (this.addDeletedItem.length == 0) {
      const alert = await this.alertCtrl.create({
        header: 'Remove Items',
        message: 'Please select item.',
        buttons: ['Dismiss'],
        mode: 'ios'
      });
      await alert.present();
      return;
    }
    this.deleteCartItem();
  }

  changeQuantity(val: any, index: any) {
    if(val != "increaseQuantity" && this.cartArray[index].quantity == 0){
      return;
    }
    this.cartArray[index].quantity = val == "increaseQuantity" ? this.cartArray[index].quantity + 1 : this.cartArray[index].quantity - 1;
  }

  deleteChecked(item_val: any, events: any) {
    if (events.detail.checked) {
      this.addDeletedItem.push(item_val);
    } else {
      let findIndex = this.addDeletedItem.findIndex(item => item.id == item_val.id);
      this.addDeletedItem.splice(findIndex, 1);
    }
    console.table(this.addDeletedItem);
  }
}
