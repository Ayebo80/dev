// crib.service.ts facilitates communication between crib-listing.component.ts & add-listing-form.component.ts

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// Subject: is an Observable & Observer
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

// InjectableDecorator: we can inject it by Dependency Injection in our application
@Injectable()
export class CribsService {


  public newCribSubject = new Subject<any>();
  constructor(private http: Http) { }

  getAllCribs() {
    // http calls in Angular2 will return an Observable, we subscribed to it in crib-listing.component.ts
    return this.http.get('data/cribs.json').map(res => res.json());
  }

  addCrib(data) {
    data.image="default-crib";
    this.newCribSubject.next(data);
  }

}
