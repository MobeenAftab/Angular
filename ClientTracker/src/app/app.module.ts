import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Angular fire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Services import
import { ClientService } from './services/client.service';

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
  { path: '', component:DashboardComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LoginComponent },
  { path: 'add-client', component:AddClientsComponent }

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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
