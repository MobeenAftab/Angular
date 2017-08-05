import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Reference componentin TS
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DirectiveTest } from './directive-test/dir-test.directive';
import { NumbersComponent } from './numbers/numbers.component'

@NgModule({
  //Load components
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DirectiveTest,
    NumbersComponent
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
