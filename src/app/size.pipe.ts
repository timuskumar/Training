import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size',
})
export class SizePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): any {
    console.log(args)
    return value / 1024;
  }
}
