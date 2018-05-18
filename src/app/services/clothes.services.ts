import { Injectable } from '@angular/core';
/**
* Injectable
*
*/
@Injectable()
export class ClothesService {

  public namePledge = 'Camiseta Nick';
  public clothingCollection = ['White pants', 'Red shirt'];
  /**
  * test
  *
  */
  test(name){
    return name;
  }
  /**
  * addClothes
  *
  */
  addClothes(name_pledge:string):Array<string>{
    this.clothingCollection.push(name_pledge);
    return this.getClothes();
  }
  /**
  * getClothes
  *
  */
  getClothes():Array<string>{
    return this.clothingCollection;
  }
  /**
  * removeGarment
  *
  */
  removeGarment(index:number){
    this.clothingCollection.splice(index, 1);
    return this.getClothes();
  }

}
