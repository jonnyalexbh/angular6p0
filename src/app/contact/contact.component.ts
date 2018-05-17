import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
/**
* decorator
*
*/
@Component({
  selector : 'contact',
  templateUrl : './contact.component.html'
})
/**
* ContactComponent
*
*/
export class ContactComponent {

  public title = 'Web contact page';
  public parameter;

  /**
  * constructor
  *
  */
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit(){
    this._route.params.forEach((params : Params) => {
      this.parameter = params['page'];
      console.log(params);
    });
  }

}
