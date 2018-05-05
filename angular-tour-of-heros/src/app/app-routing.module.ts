/**
 * Best practice to have a top level module dedicated to routing.
 * ng generate module app-routing --flat --module=app
 * --flat puts the file in src/app instead of its own folder.
 * --module=app tells the CLI to register the imports array of the AppModule.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components to route too.
import { HeroesComponent } from './components/heroes/heroes.component';

// Const path for component URL routes.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
@NgModule({
  // Exporting router module makes router directives available for use in the AppModule components.
  exports: [
    RouterModule
  ],
  imports: [
    // The forRoot method configures the router at the apps root level and supplies the service providers,
    // directives needed for routing and performs the initial navigation on current browser URL.
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
