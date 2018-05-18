import { Injectable } from '@angular/core';
/**
* Injectable
*
*/
@Injectable()
export class ClothesService {

  public namePledge = 'Camiseta Nick';
  /**
  * test
  *
  */
  test(name){
    return name;
  }

}
