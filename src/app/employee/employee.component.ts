import { Component } from '@angular/core';
import { Employee } from './employee';
/**
* decorator
*
*/
@Component({
  selector: 'employee-tag',
  templateUrl: './employee.component.html'
})
/**
* EmployeeComponent
*
*/
export class EmployeeComponent {

  public title = 'Component employee';
  public employee:Employee;
  public workers:Array<Employee>;
  /**
  * constructor
  *
  */
  constructor()
  {
    this.employee = new Employee('Jonny Alexander', 27, 'Web developer', true);
    this.workers = [
      new Employee('Jonny Alexander', 26, 'Ing. sistemas', true),
      new Employee('Juan David Lopez', 30, 'Ing. sistemas', false),
      new Employee('Daniela Lopez', 56, 'Ing. industrial', true)
    ];
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit()
  {
    console.log(this.employee);
    console.log(this.workers);
  }

}
