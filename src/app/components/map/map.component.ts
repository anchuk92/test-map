import {Component, OnInit} from '@angular/core';
import {PlaceService} from "../../shared/services/place.service";
import {Place} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  places!: Place[];
  defaultLatitude = 50.760918;
  defaultLongitude = 4.110170;

  icon = {
    url: './assets/images/icon.png',
    scaledSize: {
      height: 40,
      width: 40
    }
  } as any;

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.places$.subscribe(places => {
      this.places = places;
    })
  }


  onPlaceClick(id: number) {
    this.places = this.places.map(place => {
      if (place.id === id) {
        place.isSelected = true;
      } else {
        place.isSelected = false;
      }
      return place;
    })
    this.placeService.places$.next(this.places);
  }
}

