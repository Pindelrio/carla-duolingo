import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-match-game',
  templateUrl: './one-match-game.component.html',
  styleUrls: ['./one-match-game.component.css']
})
export class OneMatchGameComponent implements OnInit {

  private _matchString: string;
  private _randomStrings: string[];

  public finded:boolean;

  constructor() {
    this._matchString="Casa";
    this._randomStrings = ['patata', 'ceba', 'casa', 'oliva'];
    this.finded=false;
  }

  ngOnInit(): void {

  }
  /****************************************** */
  /* Events
  /********************************************/
  clickOnWord(item:string){

    if(this._matchString.toLowerCase() == item.toLowerCase())
    {
      this.finded=true;
    }
  }

  /****************************************** */
  /* Methods
  /********************************************/


  /**********************************************
   Properties
   **********************************************/
  get MatchString(){
    return this._matchString;
  }

  get RandomStrings(){
    return this._randomStrings;
  }

}
