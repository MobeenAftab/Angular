# Angular
Repo for angular related apps

## App List
* Test : Testing ground for angular related features.
* app1 : Playing with (jsonplaceholder)[https://jsonplaceholder.typicode.com/] API, dynamically changing the DOM depending on returned data and (Tachyion.io)[http://tachyons.io/].
* CookShop : Browse recipes and shop for their ingredients.
* ComponentDatabinding: various methods of communicating data between components and life cycle hooks.

## Notes
* ng set defaults.styleExt scss or ng new My_New_Project --style=scss
* [ ] = property binding: better for dynamically changing property value of html element or directive.
* ( ) = event binding
$event = default method provided by DOM to transfer data as argument when activated.
* {{ }} = String interpolation: best for outputting text into template.
* [( )] = directive: are instructions in the DOM.
* <ng-template> : mark elements in the DOM -  a directive that ships with angular.
* <ng-content></ng-content>: a special directive that acts as a hook that will render the component between the <app-comp> tags in another component
* attribute directives: only change the element they where placed on.
* structural directives: can manipulate the DOM.
* #localReference : replace two way data binding [()] with local reference to
  access whole element from DOM. Use this to pass through element.value from input into
  TS code.
