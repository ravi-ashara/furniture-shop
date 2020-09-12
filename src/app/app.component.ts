import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Events, IonRouterOutlet, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { DialogsModule } from './Modules/dialogs/dialogs.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      isSelected: false
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list',
      isSelected: false
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: 'albums',
      isSelected: false
    },
    {
      title: 'Cart',
      url: '/cart',
      icon: 'cart',
      isSelected: false
    },
    {
      title: 'Filter',
      url: '/filter',
      icon: 'funnel',
      isSelected: false
    }
    ,
    {
      title: 'Order History',
      url: '/history',
      icon: 'briefcase',
      isSelected: false
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private event: Events,
    private router: Router,
    private dialog: DialogsModule,
    private navCtrl: NavController) {
    this.initializeApp();
    this.event.unsubscribe('setSelectdValue');
    this.event.subscribe('setSelectdValue', (val: any) => {
      this.getSelectedValue(val);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getSelectedValue(location.pathname);
      this.handleHardwareBackButton();
    });
  }

  closeMenu() {
    this.menu.close();
  }

  getSelectedValue(val_url: any) {
    this.appPages.map((key: any) => { key.isSelected = val_url === key.url ? true : false; });
  }

  logout() {
    localStorage.isLogin = 'false';
    this.navCtrl.navigateRoot(['welcome']);
  }

  handleHardwareBackButton() {
    this.platform.backButton.subscribe((event: any) => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/welcome') {
        navigator['app'].exitApp();
      } else {
        if (this.router.url === '/home') {
          this.dialog.showConfirm('Are you sure you want to exit ?', ['Cancel', 'Exit'], (res: any) => {
            if (res === "Yes") {
              navigator['app'].exitApp();
            }
          });
        }
      }
    });
  }

}
