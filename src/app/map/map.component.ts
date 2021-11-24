import {Component, OnDestroy, OnInit} from '@angular/core';
import {Place} from "../shared/interfaces";
import {PlaceService} from "../shared/place.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  places: Place[] = []
  sub: Subscription | undefined
  click = false

  icon = {
    url: './assets/images/icon.png',
    scaledSize: {
      height: 40,
      width: 40
    }
  } as any

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.sub = this.placeService.getAll().subscribe(places => this.places = places)
  }

  clickMarker(place: Place) {
    this.click = true
    this.placeService.setPlace(place)
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }

}
