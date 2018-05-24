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
  public external_data = 'Jonnyalexabh';
  public identity = {
    id: 1,
    web: 'Jonnyalexabh.com.co',
    thematic: 'Web development'
  };
  /**
  * constructor
  *
  */
  constructor(){
    this.title = 'Templates ngTemplate in angular';
    this.administrator = true;
  }
  /**
  * change
  *
  */
  change(value){
    this.administrator = value;
  }

}
