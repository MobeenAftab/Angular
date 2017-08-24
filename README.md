# Angular
Repo for angular related apps

## App List
* Test : Testing ground for angular related features.
* app1 : Playing with (jsonplaceholder)[https://jsonplaceholder.typicode.com/] API, dynamically changing the DOM depending on returned data and (Tachyion.io)[http://tachyons.io/].
* CookShop : Browse recipes and shop for their ingredients.
* Component Databinding: various methods of communicating data between components and life cycle hooks.
* Services Tutorial: Playing around with services in angular, passing data between components.
* Routing Tutorial: Learning routing directive in angular.

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
* Dependency injection with services - DI is a way of instantiating a class automatically into a component.
* Proving =  a service is telling angular how to create it Adding a service to providers will create a new instance of it, overriding pervious instances.
* Injectable is meta data so a service can inject another service into itself, Usually added to the receiving service.
* Relative path (link): will append new link to current url path.
* Absolute path (/link): will always redirect to exact url path specified.
