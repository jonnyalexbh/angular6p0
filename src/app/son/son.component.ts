import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  <button (click)="send()">send data the father</button>
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

  @Output() from_son = new EventEmitter();
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
    this.send();
  }
  /**
  * send
  *
  */
  send() {
    this.from_son.emit({
      name: 'Jonnyalexabh',
      web: 'jonnyalexbh.com.co',
      twitter: 'jonnyalex.bh'
    });
  }

}
