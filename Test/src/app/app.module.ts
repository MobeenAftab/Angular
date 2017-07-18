import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Reference componentin TS
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  //Load components
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
  ],
  //Add other modules
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
