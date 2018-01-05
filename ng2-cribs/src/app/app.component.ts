import { Component } from '@angular/core';

// Decorator: takes object that has some coniguration-values for us (selector, templateUrl, styleUrls)
@Component({
  // selector: call 'app-root' component in Start-Page index.html
  selector: 'app-root',
  // templateUrl: templates are views that will be used for our components
  templateUrl: './app.component.html',
  // styleURls: 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
