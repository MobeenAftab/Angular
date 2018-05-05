import { Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/hero';
// import { HEROES } from '../../shared/mock-heros';
import { HeroService } from '../../services/hero.service';

// Metadata properties generated by angular of the component
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {

  // Single hero from class
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };

  // Exposing list of heros from mock-data
  heros: Hero[];

  // No hero selected on init
  selectedHero: Hero;

  // Access heroService methods by injection.
  // When angular creates a HeroComp the dependency injection system sets the heroService parameter
  // to the singleton instance of HeroService
  // Reserve the constructor for simle initialization such as wiring constructor parameters to properties.
  constructor(private heroService: HeroService) { }

  // ngOnInit is a lifecycle hook angular calls after creating the component
  // its a good place to put initialization logic
  // Angular will call ngOnInit at an appropriate time after constructing a HeroComp instance.
  // Use this to make function calls to fetch data, make HTTPrequests etc.
  ngOnInit() {
    this.getHeroes();
  }

  // Respond to hero click event
  onSelect(hero) {
    this.selectedHero = hero;
  }

  // Retrieve the heroes from the service
  getHeroes(): void {
    this.heros = this.heroService.getHeros();
  }
}
