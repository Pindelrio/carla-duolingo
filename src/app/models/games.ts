export enum Modes{
  easy,
  medium,
  hard
}

export interface Game{
  id: number;
  title: string;
  mode: Modes;
}

export const gamesList=[
  {id: 1, title:"Completa la frase", mode: Modes.easy},
  {id: 2, title:"Nom de la foto", mode: Modes.easy}
];
