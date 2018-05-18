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
  public cars:Array<Car>;
  /**
  * constructor
  *
  */
  constructor() {
    this.car = new Car("", "", "");
    this.cars = [
      new Car("Sail LTZ", "120", "black"),
      new Car("Renault Clio", "110", "blue")
    ];
  }
  /**
  * onSubmit
  *
  */
  onSubmit() {
    this.cars.push(this.car);
    this.car = new Car("", "", "");
  }
  /**
  * clear
  *
  */
  clear() {

  }

}
