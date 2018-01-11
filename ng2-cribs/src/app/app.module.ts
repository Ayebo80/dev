import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Allows us to make HTTP-Requests in APP
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';

// After creating a Service register it here!!! SERVICE is generated but not provided, it must be provided to be used:
import { CribsService } from './services/cribs.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
//import { UtilService } from './services/util.service';
//import { SortByPipe } from './pipes/sort-by.pipe';

// Decorators (@NgModule):
// + give us a way to modify the behaviour of a class or a property.
// + classes: add meta-data to classes
@NgModule({
  // declarations: 
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent
  ],
  // imports: import & make use of Modules Angular provides
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // providers: register Injectible Services we created
    // After creating a Service register it here!!! SERVICE is generated but not provided, it must be provided to be used:
  providers: [CribsService],
  // bootstrap: tell module what to bootstrap (which component is top-level component)
  bootstrap: [AppComponent]
})
// Decorator has to be above the class OR left of the property
export class AppModule { }

