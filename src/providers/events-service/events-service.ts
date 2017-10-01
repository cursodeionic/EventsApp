import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the EventsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsServiceProvider {
  apiUrl: 'http://api.cursodeionic.com.br'; 
  constructor(public http: Http) {}

  getEvents() {
    return this.http.get('http://api.cursodeionic.com.br/events')
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json.error));
  }

  getEvent(id) {
    return this.http.get('http://api.cursodeionic.com.br/events/' + id)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json.error));
  }

}
