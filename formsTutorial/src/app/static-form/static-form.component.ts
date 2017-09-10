import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-static-form',
  templateUrl: './static-form.component.html',
  styleUrls: ['./static-form.component.css']
})
export class StaticFormComponent implements OnInit {

  ngOnInit() {}

  @ViewChild('formData') signupForm: NgForm;

  defaultQuestion = 'pet';
  genders = ['male', 'female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };

  // Override only the username field
  suggestUserName() {
    const suggestedName = 'Superuser';
    // Patch value overrides parts of the form, setValue overrides whole form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // Get access to form and overrides all the current values
  onReset() {
    this.signupForm.setValue({
      userData: {
        username: '',
        email: ''
      },
      secret: 'pet',
      questionAnswered: '',
      gender: 'male'
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswered;
    this.user.gender = this.signupForm.value.gender;
    // Reset the form after submit
    this.signupForm.reset();
  }

}
