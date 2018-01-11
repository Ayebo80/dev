import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// InjectableDecorator: we can inject it by Dependency Injection in our application
@Injectable()
export class CribsService {

  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json').map(res => res.json());
  }


}
