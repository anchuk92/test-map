import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AgmCoreModule} from "@agm/core";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { SearchPipe } from './shared/search.pipe';
import {FormsModule} from "@angular/forms";
import { MapComponent } from './map/map.component';
import {InMemoryDataService} from "./shared/in-memory-data.service";
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    MapComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTl9f2AxWIv5VCdDuj2ZUMit9cZDtSxdg'
    }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
