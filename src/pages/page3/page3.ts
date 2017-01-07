import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  constructor(public navCtrl: NavController) {
    
  }

  goToPage1() {
    this.navCtrl.pop();
  }
}
