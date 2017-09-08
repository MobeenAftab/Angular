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
import { CanDeactiveGuard } from './servers/edit-server/can-activate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

// Routes for app
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent },   // :id = dynamic path parameter
  ]},
  { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
    { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactiveGuard] }
  ]},
  // { path: 'not-found', component: Page404Component },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not Found!'} },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full'}  // ** wildcard to catch all unknown routes
];

// declarations for exporting RouterModule into app.module
@NgModule({
  imports: [
    // , {useHash: true} for server parsing the url links to other components
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
