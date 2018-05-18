import { Component } from '@angular/core';
import { ClothesService } from '../services/clothes.services';
/**
* decorator
*
*/
@Component({
  selector : 'home',
  templateUrl : './home.component.html',
  providers: [ClothesService]
})
/**
* HomeComponent
*
*/
export class HomeComponent {
  public title = 'Homepage';
  /**
  * constructor
  *
  */
  constructor(
    private _clothesService: ClothesService
  ){

  }
  /**
  * ngOnInit - first method that is executed after the constructor
  *
  */
  ngOnInit(){
    this._clothesService.test('Jean');
    console.log(this._clothesService.test('Jean Colombia'));
  }
}
