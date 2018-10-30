import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FitnessProgramPage} from '../fitness-program/fitness-program'

@Component({
  selector: 'page-fitness-instructions',
  templateUrl: 'fitness-instructions.html',
})
export class FitnessInstructionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  backToFitness($event, item) {
    this.navCtrl.push(FitnessProgramPage, {
      item : item
    }
    )}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FitnessInstructionsPage');
  }

}
