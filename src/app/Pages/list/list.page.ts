import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  constructor(public event: Events) {
  }

  ionViewWillEnter() {
    this.event.publish('setSelectdValue', '/list');
  }

  setFav(val: any) {
    console.log('Val', val);
  }
}
