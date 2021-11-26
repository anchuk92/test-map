import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-filter',
  templateUrl: './name-filter.component.html',
  styleUrls: ['./name-filter.component.css']
})
export class NameFilterComponent implements OnInit {

  searchName = ''

  constructor() { }

  ngOnInit(): void {
  }

}
