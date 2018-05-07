/**
 * WARNING: JASON data wont presist unless 
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

// Importing extra operators
import { catchError, map, tap } from 'rxjs/operators';

// Simulate getting data from a server using 'of' function.
import { of as observableOf } from 'rxjs/observable/of'

// HTTP is a request/response protocol.
// An observable from HttpClient always emits a single value and then completes, never to emit again.
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Injecting message service into hero service.
import { MessageService } from './message.service';

import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heros';

// @Injectable decorator accepts a metadata object for the service similar to @compenent().
@Injectable()
export class HeroService {

  // Address of the heroes resource on server
  private heroesUrl = 'https://my-json-server.typicode.com/MobeenAftab/my-JSON-server/heroes';

  // Typical "service in service" scenario.
  constructor(
    private msgService: MessageService,
    private http: HttpClient
  ) {
    console.log('Hero Service executed');
  }

  // Return list of mock heros synchronous signature.
  // getHeros(): Hero[] {
  //   return HEROES;
  // }

  /*
  // Return list of heros, async signature.
  getHeroes(): Observable<Hero[]> {
    // Send message to message service when fetching hero list.
    this.msgService.add('HeroService: Fetched heroes');
    // Returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    return observableOf(HEROES);
  }
  */

  // getHeroes method using Http cleint from REST API server.
  // This works all HttpClient methods retirn an RxJS observable.
  // By applying the optional <Hero[]> type specifier a JSON typed object is returned.
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        // tap looks at observable values and does something with those values and passes them along.
        tap(heroes => this.log(`fetched heroes`)),
        // catchError op intercepts an observable that failed and passes the error to the error handler.
        // handleError() reports the error and then returns an innocuous results so the app continues running.
        catchError(this.handleError('getHeroes', []))
      );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as that observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Send the error to remote logging infrastructure
      console.error(error);

      // better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      return observableOf(result as T);
    };
  }
  /*
  // Fetch and return a single hero as an Observable, async signature.
  // Backticks `` that define a Js template literal for embedding the id.
  getHero(id: number): Observable<Hero> {
    this.msgService.add(`HeroService: fetched hero id = ${id}`);
    return observableOf(HEROES.find(hero => hero.id === id));
  }
  */

  /**
   * Construct and get hero by id using REST API.
   * @param id - id of the hero to return
   */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

  /** TODO: Not working
   * PUT: update the hero on the server.
   * PUT takes three params, the url, the hero id and the options.
   * @param hero - Hero id to update
   */
  updateHero(hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  /** TODO: Data wont presist after save
   * POST: add a new hero to the server.
   * Server generates new id for hero and returns Observable<Hero>.
   * @param hero - new hero to add
   */
  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
  }

  /**
   * DELETE: delete the hero from the server.
   * @param hero - hero to delete
   */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.http.delete<Hero>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero is=${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
  }

  // Send message to log.
  private log(msg: string) {
    this.msgService.add('HeroService: ' + msg);
  }
}
