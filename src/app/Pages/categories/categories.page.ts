import { Component } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  public showskeleton:boolean = false;
  constructor(public event: Events) {
  }

  ionViewWillEnter() {
    this.event.publish('setSelectdValue', '/categories');
    this.showskeleton = true;
    setTimeout(() => {
      this.showskeleton = false;
    },3500);
  }
}
