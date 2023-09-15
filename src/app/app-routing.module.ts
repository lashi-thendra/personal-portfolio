import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contac2Component } from './contac2/contac2.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"tech",component:TechStackComponent},
  {path:"education",component:EducationComponent},
  {path:"contact",component:Contac2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
