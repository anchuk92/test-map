import {Injectable} from "@angular/core";
import {Place} from "./interfaces";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({ providedIn: "root"})

export class PlaceService{

  constructor( private http: HttpClient) { }

  private placesUrl = 'api/places/'
  selectedPlace: Place | undefined


  getAll(): Observable<Place[]>{
    return this.http.get<Place[]>(this.placesUrl)
}

  setPlace(place:Place){
    this.selectedPlace = place
    console.log(this.selectedPlace)
}

}
