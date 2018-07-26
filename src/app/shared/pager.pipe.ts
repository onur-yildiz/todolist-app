import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'pager',
  pure: false
})
export class PagerPipe implements PipeTransform {
  transform(value: any, pageNum: number, pageCapacity: number) {
    if ( pageNum > Math.ceil(value.length / pageCapacity)) { return value; }
    let result = [];
    const endPos = pageCapacity * pageNum;
    const startPos = endPos - pageCapacity;
    let target = endPos;
    
    if (value.length < endPos) { target = value.length; }
    for (let i = startPos; i < target; i++) {
      result.push(value[i]);
    }
    return result;
  }
}