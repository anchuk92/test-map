import {Component, OnInit} from '@angular/core';
import {PlaceService} from "../../shared/services/place.service";
import {Place} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  isClicked = false
  places!: Place[]

  icon = {
    url: './assets/images/icon.png',
    scaledSize: {
      height: 40,
      width: 40
    }
  } as any

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.places$.subscribe(places => this.places = places)
  }


  clickMarker(place:Place) {
    this.isClicked = true

  }
}

