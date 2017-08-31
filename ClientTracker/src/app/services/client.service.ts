import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable()
export class ClientService {

  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(private AFDB: AngularFireDatabase) {
    // Connect to firebase DB
    this.clients = this.AFDB.list('/clients') as FirebaseListObservable<Client[]>;
  }

  getClients() {
    return this.clients;
  }

  newClient(client:Client) {
    this.clients.push(client);
  }

  getClient(id: string) {
    this.client = this.AFDB.object('/clients/'+id) as FirebaseObjectObservable<Client>;
    return this.client;
  }

  updateClient(id: string, client:Client) {
    return this.clients.update(id, client);
  }

  deleteClient(id: string) {
    return this.clients.remove(id);
  }

}
