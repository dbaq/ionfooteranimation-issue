import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController) {
    
  }

  goToPage1() {
    this.navCtrl.pop();
  }
}
