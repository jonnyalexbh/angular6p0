import { Component } from "@angular/core";
/**
* decorator
*
*/
@Component({
  selector : 'layout',
  templateUrl: './layout.component.html'
})
/**
* LayoutComponent
*
*/
export class LayoutComponent{

  public title;
  public administrator;
  /**
  * constructor
  *
  */
  constructor(){
    this.title = 'Templates ngTemplate in angular';
    this.administrator = true;
  }

}
