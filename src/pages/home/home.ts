import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2'
import { Page3 } from '../page3/page3'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToPage2() {
    this.navCtrl.push(Page2);
  }

  goToPage3() {
    this.navCtrl.push(Page3);
  }
}
