import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // name: string;
  // email: string;
  // age: number;
  // hobbies: string[];
  // isEdit: boolean = false;
  //

  users: User[];
  address: Address;
  geo: Geo;
  contactDetails:ContactDetails;
  company:Company;

  // Dependency injector
  constructor(private dataService:DataService) {
    console.log('constructor ran');
  }

  ngOnInit() {
    console.log('ngOnInit ran');

    this.dataService.GetUsers().subscribe((users) => {
      this.users = users;
    });

    // this.name = 'User One';
    // this.email = 'User1@gmail.com'
    // this.age = 100;
    // this.address = {
    //   street: 'Address 1',
    //   suite: "Apt. 556",
    //   city: 'City 1',
    //   zipCode: 'XXX XXX',
    //   geo: {
    //     lat: 'aaa',
    //     lng: 'lll'
    //   }
    // }
    //this.hobbies = ['hobby 1', 'hobby 2', 'hobby 3'];

  }

  // // Button Event
  // ButtonOne() {
  //   console.log('Button Clicked');
  //   this.name = 'New Name';
  //   this.hobbies.push('New Hobby');
  // }
  //
  // AddHobby(hobby) {
  //   console.log('Hobby Added');
  //   this.hobbies.unshift(hobby);
  //   return false;
  // }
  //
  // DeleteHobby(hobby) {
  //   console.log('Hobby Deleted');
  //   for(let i = 0; i <= this.hobbies.length; i++) {
  //     if(this.hobbies[i] == hobby) {
  //       this.hobbies.splice(i, 1);
  //     }
  //   }
  // }
  //
  // ToggleEdit() {
  //   this.isEdit = !this.isEdit;
  // }

}

// User Object diveded into smaller str ucts
interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address:Address,
  contactDetails: ContactDetails
}

interface Address {
   street:string,
   suite: string,
   city:string,
   zipcode:string,
   geo: Geo
}

interface Geo {
  lat: string,
  lng: string
}

interface ContactDetails {
  phone: string,
  website: string,
  company:Company
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}
