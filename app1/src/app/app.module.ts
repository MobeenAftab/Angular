import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Allows 2 way data binding
import { FormsModule } from '@angular/forms';
// HTTP module to make server requests
import { HttpModule } from '@angular/http';
// Router module for dynamic URL paths
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
// Access to backend server API
import { DataService } from './services/data.service';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

// Create router variables
const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'user', component:UserComponent},
  {path:'post', component:PostComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
