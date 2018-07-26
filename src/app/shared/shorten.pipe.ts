import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, length = 1, rule?: string) {
        if (value === null) { return null; }
        let result = '';
        let valArr = [value];
        if ( rule === 'split') {
          valArr = value.split(' ');
        }
        for (let valEl of valArr) {
          if (valEl.length > length) {
            result += valEl.substr(0, length);
            if ( rule === 'split') {
              result += '. ';
            } else {
              result += '... ';
            }
          } else {
            result = valEl; 
          }
        }
        return result;
    }
}
// TRY TO MAKE IT CLEANER IF POSSB.