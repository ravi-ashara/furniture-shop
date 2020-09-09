import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public navCtrl: NavController) { }

  canActivate() {
    if (localStorage.isLogin === 'true') {
      return true;
    } else {
      this.navCtrl.navigateRoot(['/welcome']);
      return false;
    }
  }
}
