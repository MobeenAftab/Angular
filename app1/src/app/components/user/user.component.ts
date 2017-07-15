import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  age: number;
  address: Address;    // address is of type object
  hobbies: string[];
  isEdit: boolean = false;

  // Dependency injector
  constructor() {
    console.log('constructor ran');
  }

  ngOnInit() {
    console.log('ngOnInit ran');

    this.name = 'User One';
    this.email = 'User1@gmail.com'
    this.age = 100;
    this.address = {
      street: 'Address 1',
      city: 'City 1',
      postCode: 'XXX XXX'
    }
    this.hobbies = ['hobby 1', 'hobby 2', 'hobby 3'];

  }

  // Button Event
  ButtonOne() {
    console.log('Button Clicked');
    this.name = 'New Name';
    this.hobbies.push('New Hobby');
  }

  AddHobby(hobby) {
    console.log('Hobby Added');
    this.hobbies.unshift(hobby);
    return false;
  }

  DeleteHobby(hobby) {
    console.log('Hobby Deleted');
    for(let i = 0; i <= this.hobbies.length; i++) {
      if(this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  ToggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

// Object interface, like a struct in c++
interface Address {
   street:string,
   city:string,
   postCode:string
}
