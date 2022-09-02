import { Component, OnInit } from '@angular/core';
import { phraseItemsList } from 'src/app/models/phrase-game-items';

@Component({
  selector: 'app-sort-phrase-game',
  templateUrl: './sort-phrase-game.component.html',
  styleUrls: ['./sort-phrase-game.component.css']
})
export class SortPhraseGameComponent implements OnInit {

  phrase:string;
  phrase2print:string;
  unsortedPhrase:string[];

  constructor() {
    // this.phraseItems = phraseItemsList;
      this.phrase2print="";
      this.phrase="Switch on your computer";
      this.unsortedPhrase = this.phrase.split(' ').sort(function(){ return 0.5-Math.random()});
  }

  ngOnInit(): void {

  }


  /* **************************************************** */
  /* Events                                               */
  /* **************************************************** */
  clickOnWord(item:string){

    if (this.phrase2print == "")
    {
      if (item == this.phrase.split(' ')[0])
      {
        this.phrase2print = this.phrase2print + item + " ";
        this.unsortedPhrase = this.checkPhrase(item);
      }
    }
    else
    {
      let frase = this.phrase.substring(0, this.phrase2print.length + item.length);
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

  /* **************************************************** */
  /* Properties                                           */
  /* **************************************************** */

  get phraseItems(): string[]{
    return this.unsortedPhrase;
  }

  get phrase2Print(): string{
    return this.phrase2print;
  }
}
