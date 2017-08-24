import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get access to properties in route path
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // Using observables o watch for data changes
    this.paramSubscription = this.route.params.subscribe(
      // Params is an object witch hold properties defined in the router parameter
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  /*
  * Observables usually live in memoery and nottied down to the same component so when
  * a component is destroyed its observable will ive on however angular takes care of
  * the subscribe and deletes it as the compnent is destroyed. Below is a method to manualy
  * destroy such an observable.
  */
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }
}
