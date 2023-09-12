import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Porfolio";
  titles  = [
    {
      title:"Projects",
      url : "/projects"
    },
    {
      title:"Tech Stack",
      url : "/tech"
    },
    {
      title:"Contact Me",
      url : "/contact"
    }
  ];
}
