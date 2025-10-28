import * as THREE from "three";

export class DataClass {
 constructor(levelsStatus) {
  this.levelsStatus = levelsStatus;
  this.table00 = {
   player: {
    hor: [
     0, 0, 0
    ],
    vert: [
     0, 0, 0
    ],
    levels: 0,
    bonusHat: false
   },
   hor: [
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 2,
     },
     {
      pos: 1,
      name: 'Александр Динозавров1',
      rec: 135,
     },
     {
      pos: 2,
      name: 'Федор Смолов1',
      rec: 12,
     },
     {
      pos: 3,
      name: 'Птиродактиль Птиродактилев1',
      rec: 24,
     },
    ],
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 2,
     },
     {
      pos: 1,
      name: 'Александр Динозавров2',
      rec: 135,
     },
     {
      pos: 2,
      name: 'Федор Смолов2',
      rec: 12,
     },
     {
      pos: 3,
      name: 'Птиродактиль Птиродактилев2',
      rec: 24,
     },
    ],
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 2,
     },
     {
      pos: 1,
      name: 'Александр Динозавров3',
      rec: 135,
     },
     {
      pos: 2,
      name: 'Федор Смолов3',
      rec: 12,
     },
     {
      pos: 3,
      name: 'Птиродактиль Птиродактилев3',
      rec: 24,
     },
    ],
   ],
   vert: [
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 2,
     },
     {
      pos: 1,
      name: '0Александр Динозавров1',
      rec: 135,
     },
     {
      pos: 2,
      name: '0Федор Смолов1',
      rec: 12,
     },
     {
      pos: 3,
      name: '0Птиродактиль Птиродактилев1',
      rec: 24,
     },
    ],
    [
     {
      pos: 0,
      name: '0Мой рекорд',
      rec: 2,
     },
     {
      pos: 1,
      name: '0Александр Динозавров2',
      rec: 135,
     },
     {
      pos: 2,
      name: '0Федор Смолов2',
      rec: 12,
     },
     {
      pos: 3,
      name: '0Птиродактиль Птиродактилев2',
      rec: 24,
     },
    ],
    [
     {
      pos: 0,
      name: '0Мой рекорд',
      rec: 2,
     },
     {
      pos: 1,
      name: '0Александр Динозавров3',
      rec: 135,
     },
     {
      pos: 2,
      name: '0Федор Смолов3',
      rec: 12,
     },
     {
      pos: 3,
      name: '0Птиродактиль Птиродактилев3',
      rec: 24,
     },
    ],
   ]
  };

  this.table = {
   player: {
    levels: [1, 2, 3],
    bonusHat: false,
   },
   hor: [
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 1,
     },
     {
      pos: 1,
      name: '',
      rec: 5,
     },
     {
      pos: 2,
      name: '',
      rec: 4,
     },
     {
      pos: 3,
      name: '',
      rec: 2,
     },
    ],
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 6,
     },
     {
      pos: 1,
      name: '',
      rec: 5,
     },
     {
      pos: 2,
      name: '',
      rec: 4,
     },
     {
      pos: 3,
      name: '',
      rec: 0,
     },
    ],
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 0,
     },
     {
      pos: 1,
      name: '',
      rec: 0,
     },
     {
      pos: 2,
      name: '',
      rec: 0,
     },
     {
      pos: 3,
      name: '',
      rec: 0,
     },
    ],
   ],
   vert: [
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 0,
     },
     {
      pos: 1,
      name: '',
      rec: 0,
     },
     {
      pos: 2,
      name: '',
      rec: 0,
     },
     {
      pos: 3,
      name: '',
      rec: 0,
     },
    ],
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 0,
     },
     {
      pos: 1,
      name: '',
      rec: 0,
     },
     {
      pos: 2,
      name: '',
      rec: 0,
     },
     {
      pos: 3,
      name: '',
      rec: 0,
     },
    ],
    [
     {
      pos: 0,
      name: 'Мой рекорд',
      rec: 0,
     },
     {
      pos: 1,
      name: '',
      rec: 0,
     },
     {
      pos: 2,
      name: '',
      rec: 0,
     },
     {
      pos: 3,
      name: '',
      rec: 0,
     },
    ],
   ]
  }

  this.masTables = [];


 }

 async clearData() {
  localStorage.clear();
 }
 async saveLocalData() {
  localStorage.setItem('table', JSON.stringify(this.table));
 }

 async loadLocalData() {


  for (let i = 0; i < 3; i++) {
   for (let j = 0; j < this.levelsStatus.length; j++) {
    if (j <= this.table.player.levels[i]) {
     console.log(123)
     this.levelsStatus[i][j] == 'completed'
    }
    else if (j == this.table.player.levels[i] + 1) {
     this.levelsStatus[i][j] == 'available'
    }
    else {
     this.levelsStatus[i][j] == 'locked'
    }
   }
  }
  // console.log(this.levelsStatus)




  this.clearData();
  if (localStorage.getItem('table') !== null) {
   this.table = localStorage.getItem('table', JSON.stringify(this.table));
  }
  else {
   localStorage.setItem('table', JSON.stringify(this.table));
  }
  let horOne = this.table['hor'][0].sort((a, b) => b.rec - a.rec);
  let horTwo = this.table['hor'][1].sort((a, b) => b.rec - a.rec);
  let horThree = this.table['hor'][2].sort((a, b) => b.rec - a.rec);

  let vertOne = this.table['vert'][0].sort((a, b) => b.rec - a.rec);
  let vertTwo = this.table['vert'][1].sort((a, b) => b.rec - a.rec);
  let vertThree = this.table['vert'][2].sort((a, b) => b.rec - a.rec);

  this.masTables = [
   [horOne, horTwo, horThree],
   [vertOne, vertTwo, vertThree],
  ]
 }


}