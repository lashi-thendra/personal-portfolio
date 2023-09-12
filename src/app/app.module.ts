import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { EducationComponent } from './education/education.component';
import { TechItemComponent } from './tech-item/tech-item.component';
import { IonicModule } from '@ionic/angular';
import { Contac2Component } from './contac2/contac2.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectItemComponent,
    TechStackComponent,
    EducationComponent,
    TechItemComponent,
    Contac2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
