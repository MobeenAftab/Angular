import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
