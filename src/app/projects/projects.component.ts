import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  baseUrl = "assets/";
  projects = [
    
    {
      title:"POS-SYSTEM",
      url : "pos.png",
      toLink:"https://github.com/lashi-thendra/pos-system",
      discription :` A comprehensive Point of Sale (POS) system that efficiently manages customers and orders. This project utilizes a wide range of technologies on both the front-end and back-end to provide a seamless and user-friendly experience.
      Back end is based on Spring`
    },
    {
      title:"ONLINE IMAGE GALLERY",
      url : "gal.png",
      toLink: "https://github.com/lashi-thendra/public-gallery",
      discription: `This web application allows users to view a gallery of images, upload new images, and download individual images. It is a basic example of how to create an image gallery with Spring and front-end technologies. `
    },
    {
      title:"INFINITY GAME",
      url: "game.png",
      toLink : "https://lashi-thendra.github.io/knight-adventure/",
      discription : "Knight Adventure is a straightforward game crafted with HTML, CSS, JavaScript, jQuery, and Bootstrap. In this game, you assume control of a character with the ability to run, jump, and launch attacks. Navigate your character left and right using the arrow keys, engage in combat with the D key, and leap into action using the space bar"
    },
    {
      title:"BROWSER BASED CHESS ENGINE",
      url : "chess.png",
      toLink: "https://lashi-thendra.github.io/webchess/",
      discription: `A chess game powered by HTML, CSS, JavaScript, and jQuery.
      Features include an AI player with predictive abilities up to a depth of 4. The game is constructed using object-oriented programming with JavaScript.`
    },
    

  ];
}
