import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() url!:string;
  @Input() text!:string;
  @Input() toLink!:string;
  @Input() title!:string;

  onClick(){
    if(this.toLink === '') return;
    window.open(this.toLink,"_blank");
  }

}
