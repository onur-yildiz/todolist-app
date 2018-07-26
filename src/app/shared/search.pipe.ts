import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, query: string, property: string, propnameSort: string, reverse?: boolean) {
    if (query === null || value.length === 0 ) { return value; }
    const result = [];
    for (const val of value) {
      if (val[property]) {
        if (val[property].toUpperCase().includes(query.toUpperCase())) {
          result.push(val);
        }
      } 
    }
    let sort = [1, -1];
    if (reverse) {
      sort.reverse();
    }
    return result.sort(
      (a, b) => {
        let ax = a[propnameSort];
        let bx = b[propnameSort];
        if (propnameSort === 'name') {
          ax = ax.toUpperCase();
          bx = bx.toUpperCase();
        }
        if ( ax > bx ) {
          return sort[0];
        } else if ( ax < bx ) {
          return sort[1];
        } else {
          return 0;
        }
      }
    );
  }
}