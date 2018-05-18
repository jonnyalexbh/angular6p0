import { Pipe, PipeTransform } from '@angular/core';
/**
* Pipe
*
*/
@Pipe({ name: 'converter' })
/**
* ConverterPipe
*
*/
export class ConverterPipe implements PipeTransform {
  /**
  * transform
  *
  */
  transform(valueOne, valTwo) {
    let value_one = parseInt(valueOne);
    let value_two = parseInt(valTwo);

    let result = 'Multiplication: ' + value_one + ' X ' + value_two + ' = ' + (value_one * value_two);

    return result;
  }

}
