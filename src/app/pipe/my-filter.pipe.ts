import {Pipe, PipeTransform} from "@angular/core";
import {Opening} from "./opening";

@Pipe({
  name: 'myFilter',
  pure: false
})

export class MyFilterPipe implements PipeTransform {
  transform(items: Opening[], filter: Opening): Opening[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Opening) => this.applyFilter(item, filter));
  }



  applyFilter(book: Opening, filter: Opening): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (book[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
