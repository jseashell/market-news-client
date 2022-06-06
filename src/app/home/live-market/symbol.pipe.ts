import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transforms stock symbols to not include a source
 */
@Pipe({
  name: 'symbol',
})
export class SymbolPipe implements PipeTransform {
  transform(value: string): unknown {
    if (value.startsWith('BINANCE:')) {
      return value.split(':')[1];
    }
  }
}
