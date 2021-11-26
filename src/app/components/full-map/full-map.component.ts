import { Component, OnInit } from '@angular/core';
import {PlaceService} from "../../shared/services/place.service";

@Component({
  selector: 'app-full-map',
  templateUrl: './full-map.component.html',
  styleUrls: ['./full-map.component.css']
})
export class FullMapComponent implements OnInit {

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.placeService.getAll().subscribe(places => {
      this.placeService.places$.next(places)
      this.placeService.responsePlaces = places;
    })
  }

}
