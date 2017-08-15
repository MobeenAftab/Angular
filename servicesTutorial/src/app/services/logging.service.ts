/*
  Dependency injection with services - DI is a way of instantiating a
  class automatically into a component.
*/
export class LoggingService {

  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
