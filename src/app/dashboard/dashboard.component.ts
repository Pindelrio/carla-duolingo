import { Component, OnInit } from '@angular/core';
import { Game, Modes, gamesList } from '../models/games';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public games: Game[] | undefined;
  frase: string | undefined;
  paraules: string[] | undefined;
  hiddenWords: string[] | undefined;

  constructor() {
      this.games = gamesList;
      let text = "Els colors que més m'agraden son el carbassa i el verd";
      this.paraules = ["patata", "carbassa", "formatge", "verd"];

      //this.frase = text.split('@');
      this.paraules.forEach(element => {
        if (text.match(element))
        {

          text = text.replace(element, "X");
          this.hiddenWords?.push(element);
        }
      });
      this.frase = text;
      //this.hiddenWordsNumber = this.frase.length-1;
  }

  ngOnInit(): void {

  }

  clickWord(item: string){
    this.hiddenWords?.forEach(element => {
      if (item == element)
      {
        alert("got it");
      }
      alert(item + ":" + element);
    });
  }
  // startGame(game:Game)
  // {
  //   alert(`The game: ${game.title} start!`);
  // }
}
