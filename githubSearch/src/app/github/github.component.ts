import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  // Observable returned data variables
  user: any;
  repos: any;

  // ngModel reference
  username: string;
  client_id: string;
  client_secret: string;

  constructor(private gitServ: GithubService) {
    console.log('Github Component INIT....');
    this.search();
  }

  ngOnInit() {
    // Set default profile on INIT
    this.username = 'mobeenaftab';
    this.search();
  }

  search() {
    this.updateUsername();
    // console.log(this.username);
    // this.getusers();
    // this.getRepos();
    // console.log(this.client_id);
    // console.log(this.client_secret);
  }

  updateUsername() {
    if (this.client_id != null && this.client_secret != null) {
      this.updateClient();
    } else {
      this.gitServ.updateUsername(this.username);
      this.getusers();
    }
  }

  // Subscribe to github service getRepos
  getRepos() {
    this.gitServ.getRepos().subscribe(repos => {
      // console.log(repos);
      this.repos = repos;
    });
  }

  // Subscribe to github service getUser
  getusers() {
    this.gitServ.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });
    this.getRepos();
  }

  updateClient() {
    this.gitServ.updateClient(this.client_id, this.client_secret, this.username);
    this.getusers();
  }

}
