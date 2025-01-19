import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padNumber',
  standalone: true
})
export class PadNumberPipe implements PipeTransform {
  transform(value: number, minDigits: number = 2): string {
    return value.toString().padStart(minDigits, '0');
  }
}
