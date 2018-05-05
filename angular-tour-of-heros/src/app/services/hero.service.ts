/**
 * Compenents shouldnt fetch or save data directly and should delegate data access to a serivice.
 * Using angulars dependency injection to inject hero data into all application classes.
 * Serices are a great way to share information among classes that dont know each other.
 */

// Hero service class will provide an injectable service and have its own injected dependencies.
import { Injectable } from '@angular/core';
/**
 * HeroService should not have a synchronous signature, in a real app asynchronous is required.
 * It can take a callback. It could return a Promise. It could return an Observable.
 * This service will return an Observable because it will use angulars HttpClient.get method to
 * fetch heroes from a remote server and it returns an Observable
*/
import { Observable } from 'rxjs/Observable';

// Simulate getting data from a server using 'of' function.
import { of as observableOf } from 'rxjs/observable/of'

import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heros';

// @Injectable decorator accepts a metadata object for the service similar to @compenent().
@Injectable()
export class HeroService {

  constructor() {
    console.log('Hero Service executed');
  }

  // Return list of mock heros synchronous signature.
  // getHeros(): Hero[] {
  //   return HEROES;
  // }

  // Return list of heros async signature.
  getHeroes(): Observable<Hero[]> {
    // returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    return observableOf(HEROES);
  }

}
