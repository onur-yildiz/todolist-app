import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, propname: string, reverse?: boolean) {
      let sort = [1, -1];
      if (reverse) {
        sort.reverse();
      }
      return value.sort(
        (a, b) => {
          let ax = a[propname];
          let bx = b[propname];
          if (propname === 'name') {
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

// MERGED WITH SEARCH!!!!