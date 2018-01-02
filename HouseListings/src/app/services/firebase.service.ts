// import { Injectable } from '@angular/core';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabase } from 'angularfire2/database';

// @Injectable()
// export class FirebaseService {

//   listings: FirebaseListObservable<any[]>;

//   constructor(private angFire: AngularFire, private afdb: AngularFireDatabase) { }

//   getListing() {
//     this.listings = this.angFire.database.list('/listings') as FirebaseListObservable<Listing[]>;
//     return this.listings;
//   }

// }

// interface Listing {
//   $key?: string;
//   title?: string;
//   type?: string;
//   image?: string;
//   city?: string;
//   owner?: string;
//   bedrooms?: string;
// }
