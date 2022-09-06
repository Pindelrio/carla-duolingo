import { Component, OnInit } from '@angular/core';
import jsonFile from 'src/assets/data/OneMatchCat.json';

@Component({
  selector: 'app-one-match-game',
  templateUrl: './one-match-game.component.html',
  styleUrls: ['./one-match-game.component.css']
})
export class OneMatchGameComponent implements OnInit {

  private _totalShowWords: string[];
  private _totalMatchWords: string[];
  private _totalRandomWord1: string[];
  private _totalRandomWord2: string[];
  private _totalRandomWord3: string[];
  
  private _showWord:string;
  private _matchString: string;
  private _randomStrings: string[];
  private _count:number;
  public finded:boolean;
  public showNext:boolean;

  constructor() {
    this._totalShowWords=[];
    this._totalMatchWords=[];
    this._totalRandomWord1 =[];
    this._totalRandomWord2 =[];
    this._totalRandomWord3 =[];

    this._showWord ="";
    this._matchString="";
    this._randomStrings = [];
    this.finded=false;
    this.showNext=false;
    this._count=0;
  }

  ngOnInit(): void {
    this.getDataFromFile();
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
  getDataFromFile(){
     jsonFile.forEach((data:any)=>{

      this._totalShowWords.push(data.catala);
      this._totalMatchWords.push(data.traduccio);
      this._totalRandomWord1.push(data.angles1);
      this._totalRandomWord2.push(data.angles2);
      this._totalRandomWord3.push(data.angles3);
    });
    this.updateWords();
  }

  updateWords(){
    this._showWord = this._totalShowWords[this._count];
    this._matchString = this._totalMatchWords[this._count];
    this._randomStrings[0] = this._totalRandomWord1[this._count];
    this._randomStrings[1] = this._totalRandomWord2[this._count];
    this._randomStrings[2] = this._totalRandomWord3[this._count];
  }

  next(){
      this._count++;
      this.updateWords();
      this.finded=false;
  }
  /**********************************************
   Properties
   **********************************************/
   get MatchString(){
    return this._matchString;
  }

  get ShowString(){
    return this._showWord;
  }

  get RandomStrings(){
    return this._randomStrings;
  }

  get ShowNext(){
    return this._count < this._totalShowWords.length-1 && this.finded;
  }
}
