import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
LajiList = [
    {data: '2019-10-30', number_1: '10', number_2: '30', number_3: '5', number_4: '6'}
  ];
  user = [
    {name: '李建', account: 'lian19980356'}
  ];
  constructor(public navCtrl: NavController) {

  }

}
