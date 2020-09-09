import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DialogsModule {
  constructor(public alertController: AlertController) { }

  /**
   *
   * @param {string} val_message display message
   * @param {*} val_button button name
   * @param {*} callBack_func Return function Yes
   * @memberof AlertModule
   */

  // tslint:disable-next-line: variable-name
  showAlert(val_message: string, val_button: any, callBack_func: any) {
    this.alertController.create({
      header: 'Furniture Shop',
      message: val_message,
      mode: 'ios',
      buttons: [
        {
          text: val_button,
          handler: () => {
            callBack_func('Yes');
          }
        }
      ]
    }).then((alert: any) => {
      alert.present();
    });
  }

  /**
   *
   * @param {string} val_message display message
   * @param {*} val_button button name ['No','Yes']
   * @param {*} callBack_func Return function Yes/No
   * @memberof AlertModule
   */
  // tslint:disable-next-line: variable-name
  showConfirm(val_message: string, val_button: any, callBack_func: any) {
    this.alertController.create({
      header: 'Furniture Shop',
      message: val_message,
      mode: 'ios',
      buttons: [
        {
          text: val_button[0],
          role: 'cancel',
          handler: () => {
            callBack_func('No');
          }
        },
        {
          text: val_button[1],
          handler: () => {
            callBack_func('Yes');
          }
        }
      ]
    }).then((confirm: any) => {
      confirm.present();
    });
  }
}
