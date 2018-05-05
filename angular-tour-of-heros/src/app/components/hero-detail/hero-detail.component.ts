/**
 *  Hero component will get the route that created it, extract id from route and
 * aquire the hero with that id from the server via the HeroService.
 */
import { Component, OnInit, Input } from '@angular/core';

// Imports to set and display the hero property and view using parameterized routerLinks.

// Activatedoute holds information about the route to this instance of the component.
// Extracts the routes parameters from the URL.
import { ActivatedRoute } from '@angular/router';
// Location is angulars service for interacting with the browser.
import { Location } from '@angular/common';

import { Hero } from '../../shared/hero';
// Get data from remote service and this component will display hero details.
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // Recive hero from heros component
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log('Display Hero Details');
    this.getHero();
  }

  /**
   * route parameters are alwys strings, '+' operator converts them into a number.
   * route.snapshot is a static image of the route information after the component was created. 
   * paramMap is a dictionary of route parameter values extracted from the URL. id returns id of each hero fetch.
   */
  getHero(): void {
    // Get current id from URL
    const id = +this.route.snapshot.paramMap.get('id');
    // Return a signle hero from Observable<Hero>
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
