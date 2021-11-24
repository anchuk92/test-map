import { Pipe, PipeTransform } from '@angular/core';
import { Place } from './interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(places: Place[], searchName = ''): Place[] {
    if (!searchName.trim()){
      return places
    }
    return places.filter( place => {
      return place.name.toLowerCase().includes(searchName.toLowerCase())
    });
  }

}
