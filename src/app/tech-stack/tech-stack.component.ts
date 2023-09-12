import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent {
  techItems = [
    {
      title:"FRONT END",
      techList: [
        "HTML 5",
        "CSS 3",
        "EcmaScript",
        "Bootstrap",
        "Angular",
        "Animate.CSS",
        "Web API (DOM API)",
        "AJAX",
        "JQuery"

      ]
    },
    {
      title:"BACK END",
      techList: [
        "Java 11",
        "Java SE 11",
        "JaKarta EE",
        "Spring Framework",
        "Spring JDBC",
        "Hibernate valiator",
        "Hibernate ORM",
        "Lombok",
        "Jackson",
        "JUnit",
        "Model Mapper",
        "NodeJS",
        "MySQL",
        "MongoDB"
        
      ]
    },
    {
      title:"OTHER",
      techList: [
        "Git",
        "GitHub",
        "Postman",
        "Tomcat",
        "Jasper Report",
        "Json",
        "XML",
        "YAML",
        "Maven",
        "IntelliJ IDEA",
        "VSCode",
        "MicroServices"
      ]
    }
  ];
}
