import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'roundNumber'})
export class RoundNumberPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 1000) {
      return value + '';
    }
    const t = (Math.ceil(value / 100) + '').split('');
    t.splice(t.length - 1, 0, '.');
    return t.join('') + 'k';
  }
}
