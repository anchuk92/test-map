import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Place } from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let places:Place[] =
      [
        {
          id: 1,
          latitude: 50.760918,
          longitude: 4.110170,
          name: 'Skoda'
        },
        {
          id: 2,
          latitude: 47.492647,
          longitude: 19.051399,
          name: 'Mercedes'
        },
        {
          id: 3,
          latitude: 41.902689,
          longitude: 12.496176,
          name: 'Lexus'
        },
        {
          id: 4,
          latitude: 43.779787,
          longitude: 11.265817,
          name: 'Volkswagen'
        },
        {
          id: 5,
          latitude: 52.373057,
          longitude: 4.892557,
          name: 'Lada'
        },
        {
          id: 6,
          latitude: -22.903150,
          longitude: -43.189903,
          name: 'Kia'
        },
        {
          id: 7,
          latitude: 38.716174,
          longitude: -9.141589,
          name: 'Bentli'
        },
        {
          id: 8,
          latitude: 50.080293,
          longitude: 14.428983,
          name: 'Porche'
        },
        {
          id: 9,
          latitude: 48.856663,
          longitude: 2.351556,
          name: 'BMW'
        },
        {
          id: 10,
          latitude: 45.438095,
          longitude: 12.319029,
          name: 'Honda'
        }
      ]
    return {places};
  }
}

