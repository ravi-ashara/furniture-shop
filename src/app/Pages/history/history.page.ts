import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  orderArray: any = [0, 1, 2];
  showSkeleton: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showSkeleton = false
    }, 3500);
  }

}
