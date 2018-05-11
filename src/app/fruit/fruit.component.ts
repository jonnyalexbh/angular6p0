import { Component } from '@angular/core';

@Component({
  selector: 'fruit',
  templateUrl: './fruit.component.html'
})

/*
  @Component({
    selector: 'fruit',
    template: `
    <h2>{{ name_component }}</h2>
    <p>{{ list_fruit }}</p>
    `
})
*/

/**
* FruitComponent
*
*/
export class FruitComponent {

  public name_component = 'Fruit Component';
  public list_fruit = 'Apple, banana, mango and pear';

}
