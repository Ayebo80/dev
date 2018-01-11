// Take Property Binding [crib] from crib-listing.component.hmtl and use it as Input
import { Component, OnInit, Input } from '@angular/core';
import { Crib } from './../crib'; //import Crib from /ng2-crib/src/app/crib.ts

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {
  
  // use Input as decorator says that we accept a bind called 'crib' and asign locally as crib
  @Input('crib') crib: Crib;

  constructor() { }

  ngOnInit() {
    let bedrooms = this.crib.bedrooms;
    //let kitchens = this.crib.kitchens;
  }

}
