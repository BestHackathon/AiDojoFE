import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutTillComma',
  standalone: true
})
export class CutTillCommaPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    const index = value.indexOf(',');
    return index !== -1 ? value.substring(0, index) : value;
  }

}
