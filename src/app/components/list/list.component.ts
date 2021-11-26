import { Component, OnInit } from '@angular/core';
import { Place } from '../../shared/interfaces/interfaces';
import {PlaceService} from "../../shared/services/place.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  places!: Place[];

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.places$.subscribe(places => this.places = places);
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
