import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private FMS: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  // Validate user login, validation on firebase server
  onSubmit() {
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.FMS.show('Logged In', {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.FMS.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['/login']);
      });
  }

}
