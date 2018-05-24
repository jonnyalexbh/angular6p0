import { Component, Input } from '@angular/core';
/**
* decorator
*
*/
@Component({
  selector: 'son-component',
  template: `
  <p>this is the son component</p>
  <ul>
  <li>{{ property_one }}</li>
  <li>{{ property_two.web }}</li>
  </ul>
  `
})
/**
* SonComponent
*
*/
export class SonComponent {

  public title:string;
  @Input('text1') property_one:string;
  @Input('text2') property_two:string;
  /**
  * constructor
  *
  */
  constructor() {
    this.title = 'Son Component';
    console.log('from the builder ' + this.property_one);
    console.log('from the builder ' + this.property_two);
  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit() {
    console.log(this.property_one);
    console.log(this.property_two);
  }

}
