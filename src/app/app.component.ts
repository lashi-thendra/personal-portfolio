import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Porfolio";
  titles  = [
    "Home",
    "Projects",
    "Teck Stack",
    "Education",
    "Contact Me"
  ];
}
