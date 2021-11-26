import { Component, OnInit } from '@angular/core';
import {PlaceService} from "../../shared/services/place.service";
import {Place} from "../../shared/interfaces/interfaces";

@Component({
  selector: 'app-objects-card',
  templateUrl: './objects-card.component.html',
  styleUrls: ['./objects-card.component.css']
})
export class ObjectsCardComponent implements OnInit {

  constructor(private placeService: PlaceService) { }

  places!: Place[];

  ngOnInit(): void {
  }

  onChanged(text: string) {
    if (!text.trim()){
      this.placeService.places$.next(this.placeService.responsePlaces);
    }
    if (text.trim()) {
      this.places = this.placeService.responsePlaces.filter(place => {
        return place.name.toLowerCase().includes(text.toLowerCase());
      })
      this.placeService.places$.next(this.places);
    }
  }
}
