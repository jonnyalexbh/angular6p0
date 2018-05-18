import { Component } from '@angular/core';
import { Car } from './car';
/**
* decorator
*
*/
@Component({
  selector : 'cars',
  templateUrl: './cars.component.html'
})
/**
* CarsComponent
*
*/
export class CarsComponent {

  public car: Car;
  /**
  * constructor
  *
  */
  constructor() {
    this.car = new Car("", "", "");
  }
  /**
  * onSubmit
  *
  */
  onSubmit(){
    console.log(this.car);
  }

}
