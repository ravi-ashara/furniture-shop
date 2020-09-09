import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage {

  constructor(public event: Events) {
  }

  ionViewWillEnter() {
    this.event.publish('setSelectdValue', '/filter');
  }
}
