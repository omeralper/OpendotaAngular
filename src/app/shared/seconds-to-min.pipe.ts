import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'secondsToMin'})
export class SecondsToMinPipe implements PipeTransform {
  transform(value: number): string {
    const min = Math.floor(value / 60);
    const sec = value % 60;
    return min + ':' + (sec < 10 ? '0' + sec : sec);
  }SecondsToMinPipe
}
