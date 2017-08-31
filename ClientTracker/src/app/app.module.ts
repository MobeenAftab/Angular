import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Angular third party modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Services import
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

// Component imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsDetailsComponent } from './components/clients-details/clients-details.component';
import { AddClientsComponent } from './components/add-clients/add-clients.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { Page404Component } from './components/page404/page404.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientsComponent, canActivate: [AuthGuard] },
  { path: 'client/:id', component: ClientsDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit-client/:id', component: EditClientsComponent, canActivate: [AuthGuard] }
];

export const firebaseConfig = {
  apiKey: "AIzaSyD-NqCGNbHdG46Yuov_sld2D-kk0sdysGE",
  authDomain: "client-tracker-c7c39.firebaseapp.com",
  databaseURL: "https://client-tracker-c7c39.firebaseio.com",
  storageBucket: "client-tracker-c7c39.appspot.com",
  messagingSenderId: "962836109471"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientsDetailsComponent,
    AddClientsComponent,
    EditClientsComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
