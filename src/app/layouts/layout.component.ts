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
  public data_of_son;
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
  /**
  * receiveData
  *
  */
  receiveData(event) {
    this.data_of_son = event;
    console.log(this.data_of_son);
  }

}
