import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username = 'mobeenaftab';
  private client_id;
  private client_secret;

  constructor(private http: Http) {
    console.log('Github Service INIT...');
  }

  // Observable to get user
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username + 
    '?client_id=' + this.client_id + 
    '&client_secret=' + this.client_secret)
    // Return JSON content
    .map(res => res.json());
  }

  // Observable to get user repos
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos' + 
    '?client_id=' + this.client_id +
    '&client_secret=' + this.client_secret)
    .map(res => res.json());
  }

  updateUsername(username: string) {
    this.username = username;
  }

  updateClient(client_id: string, client_secret: string, username:string) {
    this.client_id = client_id;
    this.client_secret = client_secret;
    this.username = username;
    // console.log(client_id);
    // console.log(client_secret);
  }

}
