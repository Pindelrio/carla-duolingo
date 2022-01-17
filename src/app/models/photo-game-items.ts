export interface PhotoGameItem{
  id: number;
  url: string;
  name: string;
  nameOptions: string[];
}

export const photoItemsList = [
  {id: 1, url:"https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg", name:"Apple", nameOptions: []},
  {id: 2, url:"https://upload.wikimedia.org/wikipedia/commons/3/35/Mini_pineapple.jpg", name:"Pineapple", nameOptions: ['apple', 'pineapple', 'strawberry']},

];
