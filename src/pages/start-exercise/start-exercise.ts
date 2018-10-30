import {Component, ElementRef} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {MyService} from "./start-exercise.service";


@Component({
  selector: 'page-start-exercise',
  templateUrl: 'start-exercise.html',
  providers: [MyService]
})
export class StartExercisePage {
  activated: boolean = false;
  exercise: string;

  countDownTimer;
  counter = 10;

  constructor(
    public myService: MyService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private elementRef: ElementRef
  ) {

  }

  start() {
    this.activated = true;
    this.countDownTimer = this.myService.getCounter().do(() => --this.counter);
    //this.countDownTimer = this.myService.getCounter();
    this.myService.timerSwitch = true;
  }

  resetTimer() {
    this.activated = false;
    this.myService.timerSwitch = false;
    this.myService.counter = 30;
    this.countDownTimer = this.myService.getCounter();
  }

  pauseTimer() {
    this.myService.timerSwitch = false;
  }

  resume(){

    this.myService.timerSwitch = true;
  }
}


