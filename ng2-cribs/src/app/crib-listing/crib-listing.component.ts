import { Component, OnInit } from '@angular/core';

// Component-Decorator @Component for class CribListingComponent
@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
// OnInit: do something whenever this component starts up
export class CribListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
