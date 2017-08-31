import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  showRegister: boolean;
  loggedInUser: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private FMS: FlashMessagesService
  ) { }

  ngOnInit() {
    // Check if user is logged in
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.FMS.show('Loged Out', {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/login']);
  }
}
