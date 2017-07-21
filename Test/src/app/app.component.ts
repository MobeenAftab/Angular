import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  //Can also style in ts script like below
  styles: [`
    h3 { color: dodgerblue; }
    .white-text { color: white;}
    `]
})

export class AppComponent {

  showSecret: boolean = false;
  log = [];

  OnToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length +1);
    this.log.push(new Date());

  }

}
