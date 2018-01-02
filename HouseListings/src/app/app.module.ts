import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { FirebaseService } from './services/firebase.service';

import { FirebaseAuth } from '@firebase/auth-types';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

// Angular firebase config
// export const firebaseConfig = {
//   apiKey: 'AIzaSyD8Jx0vXhHvGkZ24RJSyAC6r1PeLXUoqrA',
//   authDomain: 'houselisting-8fd0d.firebaseapp.com',
//   databaseURL: 'https://houselisting-8fd0d.firebaseio.com',
//   projectId: 'houselisting-8fd0d',
//   storageBucket: 'houselisting-8fd0d.appspot.com',
//   messagingSenderId: '755849859070'
// };

// Router path links
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent},
  {path: 'add-listing', component: AddListingComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    AddListingComponent,
    EditListingComponent,
  ],
  imports: [
    BrowserModule,
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],  //FirebaseService
  bootstrap: [AppComponent]
})
export class AppModule { }
