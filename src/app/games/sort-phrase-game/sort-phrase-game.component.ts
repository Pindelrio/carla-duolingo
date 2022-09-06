import { Component, OnInit } from '@angular/core';
import jsonFile from 'src/assets/data/PhraseEn.json';

@Component({
  selector: 'app-sort-phrase-game',
  templateUrl: './sort-phrase-game.component.html',
  styleUrls: ['./sort-phrase-game.component.css']
})
export class SortPhraseGameComponent implements OnInit {

  private _count:number;

  phrase:string[];
  phrase2print:string;
  phrase2PrintTranslate:string[];
  unsortedPhrase:string[];
  public showNext:boolean;

  constructor() {
      this._count=0;
    
      this.phrase2print="";
      this.phrase=[];
      this.unsortedPhrase = [];
      this.phrase2PrintTranslate =[];
      this.showNext=false;
  }

  ngOnInit(): void {
    this.getDataFromFile();
  }


  /* **************************************************** */
  /* Events                                               */
  /* **************************************************** */
  clickOnWord(item:string){

    if (this.phrase2print == "")
    {
      if (item == this.phrase[this._count].split(' ')[0])
      {
        this.phrase2print = this.phrase2print + item + " ";
        this.unsortedPhrase = this.checkPhrase(item);
      }
    }
    else
    {
      let frase = this.phrase[this._count].substring(0, this.phrase2print.length + item.length);
      if (this.phrase2print + item == frase)
      {
        this.phrase2print = this.phrase2print + item + " ";
        this.unsortedPhrase = this.checkPhrase(item);
      }
    }
  }
  /* **************************************************** */
  /* Methods                                              */
  /* **************************************************** */
  checkPhrase(item:string): string[]{
    let tempUnsortedPhrase=[];
    let noRepeat=true;
    for(let element of this.unsortedPhrase)
    {
      if(element!=item)
      {
        tempUnsortedPhrase.push(element)
      }
      else
      {
        if (noRepeat)
        {
          noRepeat=false;
        }
        else
        {
          tempUnsortedPhrase.push(element)
        }
      }
    }
    return tempUnsortedPhrase;
  }

  next(){
    this.phrase2print = "";
    this._count++;
    this.updateWords();
    //this.finded=false;
}

getDataFromFile(){
  jsonFile.forEach((data:any)=>{
   this.phrase.push(data.frase);
   this.phrase2PrintTranslate.push(data.traduccio);
 });
 this.updateWords();
}

updateWords(){

  this.unsortedPhrase = this.phrase[this._count].split(' ').sort(function(){ return 0.5-Math.random()});
}
  /* **************************************************** */
  /* Properties                                           */
  /* **************************************************** */


  get phraseItems(): string[]{
    return this.unsortedPhrase;
  }

  get phrase2Print(): string{
    return this.phrase2print;
  }

  get phraseCompleted(): boolean{
    return this.phrase2print.trim().length == this.phrase[this._count].trim().length;
  }
  
  get ShowNext(){
    return this._count < this.phrase.length-1 && this.phraseCompleted;
  }

  get PhraseTranslate(){
    return this.phrase2PrintTranslate[this._count];
  }
}
