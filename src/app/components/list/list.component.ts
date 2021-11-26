import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { Place } from '../../shared/interfaces/interfaces';
import {PlaceService} from "../../shared/services/place.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  places$: Observable<Place[]> = new Observable<Place[]>()
  searchName = ''
  click = false

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
    this.places$ = this.placeService.getAll()

  }
  clickName(place: Place) {

  }

}