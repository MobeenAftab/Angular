/*
  Compenents shouldnt fetch or save data directly and should delegate data access to a serivice.
  Using angulars dependency injection to inject hero data into all application classes.
  Serices are a great way to share information among classes that dont know each other.
*/

// Hero service class will provide an injectable service and have its own injected dependencies.
import { Injectable } from '@angular/core';

import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heros';

// @Injectable decorator accepts a metadata object for the service similar to @compenent().
@Injectable()
export class HeroService {

  constructor() {
    console.log('Hero Service executed');
  }

  // Return list of mock heros
  getHeros(): Hero[] {
    return HEROES;
  }

}
