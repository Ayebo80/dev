import { Component, OnInit } from '@angular/core';
//import { cribs } from './../data/cribs'; => BESSER: HTTP-Request
import { Http } from '@angular/http';

@Component({
  // app-crib-listing is a CHILD of our top Component
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  // = cribs; => BESSER: HTTP-Request

  // inject Http-Class
  constructor(private http: Http) { }

  ngOnInit() {
    // make an http request (asynchronouse operation: we know that response comes back, but we don't know WHEN, so we can do other things in App untill response )
    // 1. Handle asynchronous operations with Callbacks:
    // this.http.get('data/cribs.json', function(err, data))
    // 2. Handle asynchronous operations with Promises:
    // this.http.get('data/cribs.json').then(data)
    // 3. Handle asynchronous operations with Observables( more powerfull then Callbacks,Promises, handle values over course of time ):
    // this.http.get('data/cribs.json').subscribe

  }

}
