import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AgmCoreModule} from "@agm/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MapComponent } from './components/map/map.component';
import {InMemoryDataService} from "./shared/services/in-memory-data.service";
import { ListComponent } from './components/list/list.component';
import { NameFilterComponent } from './components/filters/name-filter/name-filter.component';
import { FullMapComponent } from './components/full-map/full-map.component';
import { ObjectsCardComponent } from './components/objects-card/objects-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListComponent,
    NameFilterComponent,
    FullMapComponent,
    ObjectsCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTl9f2AxWIv5VCdDuj2ZUMit9cZDtSxdg'
    }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
