import { Subject } from 'rxjs/Subject';

export class UserService {
    // Subject is an observable and an observer rolled into one
    userActivated = new Subject;
}
