import { Component, OnInit } from '@angular/core';
//import { cribs } from './../data/cribs'; => BESSER: HTTP-Request
import { Http } from '@angular/http';
import { CribsService } from './../services/cribs.service';
//Make sure we get data back as JSON, map allows us to transform values that come back from HTTP
//import 'rxjs/add/operator/map';

@Component({
  // app-crib-listing is a CHILD of our top Component
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  // = cribs; => BESSER: HTTP-Request
  error: string;

  // inject Http-Class & Injectible Service CribsService
  constructor(
    private http: Http, 
    private cribsService: CribsService
  ) { }

  ngOnInit() {
    // make an http request (asynchronouse operation: we know that response comes back, but we don't know WHEN, so we can do other things in App untill response )
    // 1. Handle asynchronous operations with Callbacks:
    // this.http.get('data/cribs.json', function(err, data))
    // 2. Handle asynchronous operations with Promises:
    // this.http.get('data/cribs.json').then(data)
    // 3. Handle asynchronous operations with Observables
    // ( more powerfull then Callbacks & Promises, handle values over course of time ):
    // .subscribe: Angulars HTTP Request gives us an Observable back, we can Subscribe to the result of the HTTP Request
    // this.http.get('data/cribs.json').subscribe
    
    // A. make a get Request for 'data/cribs.json':
//    this.http.get('data/cribs.json')
      // B. map Response as JSON
//      .map(res => res.json())
      // C. subscribe to Result
//      .subscribe(
        // D. log Response data to console
        // data => console.log(data)
        // D. When data comes back:
//        data => this.cribs = data,
//        error => this.error = error.statusText
//      );

    this.cribsService.getAllCribs()
      .subscribe(
        data => this.cribs = data,
        error => this.error = error.statusText
      );
  }

}
