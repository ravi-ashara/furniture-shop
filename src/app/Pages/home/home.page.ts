import { Component } from '@angular/core';
import { Events, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true
  };
  public isSearch: boolean = false;
  public showskeleton: boolean = false;
  constructor(public event: Events, public menuCtrl: MenuController) {

  }

  toggleSearch() {
    this.isSearch = !this.isSearch
  }

  ionViewWillEnter() {
    this.event.publish('setSelectdValue', '/home');
    this.showskeleton = true;
    this.menuCtrl.enable(true);
    setTimeout(() => {
      this.showskeleton = false;
    }, 3500);
  }
}
