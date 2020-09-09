import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  constructor(public menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}
