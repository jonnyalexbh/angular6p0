import { Component } from '@angular/core';
import { Car } from './car';
import { RequestService } from '../services/request.service';
/**
* decorator
*
*/
@Component({
  selector : 'cars',
  templateUrl: './cars.component.html',
  providers: [RequestService]
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
  constructor(private _requestService: RequestService) {
    this.car = new Car("", "", "");
    this.cars = [
      new Car("Sail LTZ", "120", "black"),
      new Car("Renault Clio", "110", "blue")
    ];
  }
  /**
  * ngOnInit
  *
  */
  ngOnInit(){
    console.log(this._requestService.getTest());
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
