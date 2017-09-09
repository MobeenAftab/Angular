import { UserService } from '../user/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // Observable operator which transform the data returned using map function
    // provided by rxjs/rx - returns a new observable
    const myNumbers = Observable.interval(1000).map(
      (data: number) => {
        return data * 2;
      }
    );
    this.numbersSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    // Custom observable
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
      // Wont ever arrive as observable is killed after 5 seconds
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    // Subscribe to custom observable
    this.customSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

  // Destroy observable on leaving component
  ngOnDestroy() {
    this.customSubscription.unsubscribe();
    this.numbersSubscription.unsubscribe();
  }

}
