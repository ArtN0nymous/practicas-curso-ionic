import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { delay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getAlbums(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getSuperHeroes(){
    return this.http.get<any[]>('assets/data/superheroes.json').pipe(
      delay(1500)
    );
  }
}
