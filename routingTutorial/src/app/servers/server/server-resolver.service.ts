import { ServersService } from '../servers.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}
// Fetch and load data before rendering page
@Injectable()
export class ServerResolver implements Resolve<{id: number, name: string, status: string}> {

    constructor(private serverService: ServersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
            Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }
}
