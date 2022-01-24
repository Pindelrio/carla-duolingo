import { Component, OnInit } from '@angular/core';
import { phraseItemsList } from 'src/app/models/phrase-game-items';

@Component({
  selector: 'app-phrase-game',
  templateUrl: './phrase-game.component.html',
  styleUrls: ['./phrase-game.component.css']
})
export class PhraseGameComponent implements OnInit {

  phrase: string;
  phrase2print: string;
  hiddenWords: string[];
  words: string[];
  phraseItems:string[];
  index:number;

  constructor() {
      this.phraseItems = phraseItemsList;
      this.index = 0;
      this.phrase = '';
      this.phrase2print = '';
      this.words =[];
      this.hiddenWords =[];
      this.initPhrase();
  }

  ngOnInit(): void {
  }

  initPhrase(){
    this.phrase = this.phraseItems[this.index];
    this.phrase2print = this.phrase;
    this.words = this.phrase.split(' ');
    this.words.forEach(element => {
        if (element.indexOf('@')==0)
        {
          this.phrase2print = this.phrase2print.replace(element, "X");
          this.hiddenWords.push(element.substring(1,element.length));
        }
      });
      this.hiddenWords.sort();
  }

  clickOnWord(item: string){
    let i=0;
    let hiddens:string[] = [];
    for(let element of this.phrase2print.split(' '))
    {
      if (element == 'X')
      {
        if (this.words[i].substring(1,this.words[i].length) == item)
         { this.phrase2print = this.phrase2print.replace(element, item);

          for(let h of this.hiddenWords)
          {
            if (h != item)
            {
              hiddens.push(h);
            }
          }
          this.hiddenWords = hiddens;
        }
        else
        alert("You're wrong, try again!");
        break;
      }

      i++;
    };
  }
  nextPhoto(){
    this.index++;
    this.hiddenWords = [];
    this.initPhrase();
  }
}
