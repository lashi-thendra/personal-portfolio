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
      url : "audplayer.png",
      toLink:"https://github.com/lashi-thendra/audio-player",
      discription :`The Audio Player App, developed with JavaFX and utilizing the Java Media API, offers a straightforward yet versatile solution for playing audio files. This application empowers users to effortlessly select their desired audio files, exercise control over playback functions, fine-tune volume levels with a slider, monitor the current and total duration of the audio, enable looping with a clear loop count  `
    },
    {
      url: "game.png",
      toLink : "https://lashi-thendra.github.io/knight-adventure/",
      discription : "Knight Adventure is a straightforward game crafted with HTML, CSS, JavaScript, jQuery, and Bootstrap. In this game, you assume control of a character with the ability to run, jump, and launch attacks. Navigate your character left and right using the arrow keys, engage in combat with the D key, and leap into action using the space bar"
    },
    {
      url : "chess.png",
      toLink: "https://lashi-thendra.github.io/webchess/",
      discription: `A chess game powered by HTML, CSS, JavaScript, and jQuery.
      Features include an AI player with predictive abilities up to a depth of 4. The game is constructed using object-oriented programming with JavaScript, ensuring clean and maintainable code. Additionally, you can review your game with ease by accessing the move history, making it a valuable tool for analyzing strategies and learning from your matches`
    }

  ];
}
