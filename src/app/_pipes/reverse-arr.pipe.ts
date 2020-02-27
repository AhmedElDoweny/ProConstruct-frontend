import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseArr'
})
export class ReverseArrPipe implements PipeTransform {

  transform(value: any []): any [] {
    return value.slice().reverse();
  }

}
