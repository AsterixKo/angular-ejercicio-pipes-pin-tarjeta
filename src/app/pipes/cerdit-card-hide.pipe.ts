import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cerditCardHide'
})
export class CerditCardHidePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let result: string = '';

    if (!args[0]) {
      result = value;
    } else {
      for (let index = 0; index < value.length; index++) {
        result += '*';
      }
    }
    return result;
  }

}
