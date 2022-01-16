import { Component, OnInit } from '@angular/core';
import { PhotoGameItem, photoItemsList } from '../../models/photo-game-items';

@Component({
  selector: 'app-photo-game',
  templateUrl: './photo-game.component.html',
  styleUrls: ['./photo-game.component.css']
})
export class PhotoGameComponent implements OnInit {

  photoItems: PhotoGameItem[];
  public current: PhotoGameItem;
  showName: boolean;
  index: number;

  constructor() {
    this.showName = false;
    this.photoItems = photoItemsList;
    this.index = 0;
    this.current = this.photoItems[this.index];

  }

  ngOnInit(): void {
  }

  showImageName(){
    this.showName = true;
  }
  nextPhoto(){
    this.showName = false;
    this.index++;
    this.current = this.photoItems[this.index];
  }
}
