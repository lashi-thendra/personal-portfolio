import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contac2',
  templateUrl: './contac2.component.html',
  styleUrls: ['./contac2.component.css']
})
export class Contac2Component {
  goToGithub(){
    window.open("https://github.com/lashi-thendra",'_blank');
  }
  goToLinked(){
    window.open("https://linkedin.com/in/lashithendra",'_blank');
  }
}
