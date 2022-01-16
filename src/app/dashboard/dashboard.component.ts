import { Component, OnInit } from '@angular/core';
import { Game, Modes, gamesList } from '../models/games';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public games: Game[] | undefined;
  frase: string[] | undefined;
  frase2: string[] | undefined;
  hiddenWordsNumber: number | undefined;

  constructor() {
      this.games = gamesList;
      let text = "This @ is @ the @ phrase @ you @ have to fill with words below.";
      this.frase = text.split('@');
      this.frase.forEach(element => {

      });
      this.hiddenWordsNumber = this.frase.length-1;
  }

  ngOnInit(): void {
  }

  startGame(game:Game)
  {
    alert(`The game: ${game.title} start!`);
  }
}
