import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  // Injecting Http
  constructor(public http:Http) {
    console.log('Data Service Connected...');
  }

  getPosts() {
    // Fetch data from api, map json data returns all data from url into json
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }



}
