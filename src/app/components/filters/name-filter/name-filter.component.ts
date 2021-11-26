import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-name-filter',
  templateUrl: './name-filter.component.html',
  styleUrls: ['./name-filter.component.css']
})
export class NameFilterComponent implements OnInit {

  @Output() onChanged: EventEmitter<string> = new EventEmitter<string>();

  searchText: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.searchText.valueChanges.subscribe( text => {
      this.onChanged.emit(text);
    })
  }

}
