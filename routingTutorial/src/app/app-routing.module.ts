import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Page404Component } from './page-404/page-404.component';
import { AuthGuard } from './auth-guard.service';

// Routes for app
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent },   //:id = dynamic path parameter
  ]},
  { path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
    { path: ':id', component: ServerComponent },
    { path: ':id/edit', component: EditServerComponent }
  ]},
  { path: 'not-found', component: Page404Component },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}  // ** wildcard to catch all unknown routes
];

// declarations for exporting RouterModule into app.module
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
