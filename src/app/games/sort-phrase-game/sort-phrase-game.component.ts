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
      this.phrase="la casa es la nostre llar";
      this.unsortedPhrase = this.phrase.split(' ').sort(function(){ return 0.5-Math.random()});
  }

  ngOnInit(): void {

  }


  /* **************************************************** */
  /* Events                                               */
  /* **************************************************** */


  /* **************************************************** */
  /* Methods                                              */
  /* **************************************************** */
  clickOnWord(item:string){

    if (this.phrase2print == "")
    {
      if (item == this.phrase.split(' ')[0])
      {
        this.phrase2print = this.phrase2print + item + " ";
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
              tempUnsortedPhrase.push(element)
              noRepeat=false;
            }
          }
        }
        this.unsortedPhrase = tempUnsortedPhrase;
      }
    }
    else
    {
      let frase = this.phrase.substring(0, this.phrase2print.length + item.length);
      if (this.phrase2print + item == frase)
      {
        this.phrase2print = this.phrase2print + item + " ";

        let tempUnsortedPhrase=[];
        for(let element of this.unsortedPhrase)
        {
          if(element!=item)
          {
            tempUnsortedPhrase.push(element)
          }
        }
        this.unsortedPhrase = tempUnsortedPhrase;
      }
    }

    // let splited = this.phrase2print.split(' ');
    // let i=0;
    // for(let element of this.phrase.split(' '))
    // {
    //     if (element == splited[])
    // }
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
