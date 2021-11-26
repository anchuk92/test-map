import {Injectable} from "@angular/core";
import {Place} from "../interfaces/interfaces";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({ providedIn: "root"})

export class PlaceService{

  constructor( private http: HttpClient) { }

  private placesUrl = 'api/places/'
  responsePlaces!: Place[]
  places$: Subject<Place[]> = new Subject<Place[]>()

  getAll(): Observable<Place[]>{
    return this.http.get<Place[]>(this.placesUrl)
  }

  filterPlaceName (text: string) {
      this.places$.subscribe(places => {
        if (!text.trim()){
          return places
        }
        return places.filter( place => {
          return place.name.toLowerCase().includes(text.toLowerCase())
        });
      })
  }


}
