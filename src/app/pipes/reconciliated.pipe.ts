import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reconciliated'
})
export class ReconciliatedPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Yes' : 'No';
  }

}
