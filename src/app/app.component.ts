import { Component } from '@angular/core'; @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  randomArray = [0, 2, 3, 9, 10, 14, 4, 8, 11, 5, 7, 6, 12, 13, 1, 15];
  correct = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  matrix = [[0, 0, 0,], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  SIZE = this.matrix.length;
  BLANK = 15
  showHiddenBlock = false;
  showHint: boolean = false;

  constructor() {

    this.shuffle();


  }

  shuffle() {

    this.randomArrayShuffle(this.randomArray);




    let inversions = 0;
    for (let i = 0; i < this.randomArray.length; i++) {
      for (let j = i + 1; j < this.randomArray.length; j++) {
        if (this.randomArray[i] > this.randomArray[j] && (this.randomArray[i] != 15 || this.randomArray[j] != 15)) {
          inversions++;
        }
      }
    }
    let index = this.randomArray.indexOf(15);
    if (inversions % 2 == 1 && (index >= 0 && index <= 3 || index >= 8 && index <= 11)) {
      let c = 0;


      for (let i = 0; i < this.SIZE; i++) {
        for (let j = 0; j < this.SIZE; j++) {
          this.matrix[i][j] = this.randomArray[c++];

        }
      }
      return;
    }
    if (inversions % 2 == 0 && (index >= 4 && index <= 7 || index >= 12 && index <= 15)) {
      let c = 0;


      for (let i = 0; i < this.SIZE; i++) {
        for (let j = 0; j < this.SIZE; j++) {
          this.matrix[i][j] = this.randomArray[c++];

        }
      }
      return;
    }
    let temp;
    if (index >= 13) {

      if (this.randomArray[13] == 15) {
        temp = this.randomArray[14];
        this.randomArray[14] = this.randomArray[15];
        this.randomArray[15] = temp;
      } else if (this.randomArray[14] == 15) {
        temp = this.randomArray[13];
        this.randomArray[13] = this.randomArray[15];
        this.randomArray[15] = temp;
      } else {
        temp = this.randomArray[13];
        this.randomArray[13] = this.randomArray[14];
        this.randomArray[14] = temp;

      }
    } else {
      temp = this.randomArray[14];
      this.randomArray[14] = this.randomArray[15];
      this.randomArray[15] = temp;

    }


    let c = 0;


    for (let i = 0; i < this.SIZE; i++) {
      for (let j = 0; j < this.SIZE; j++) {
        this.matrix[i][j] = this.randomArray[c++];

      }
    }




  }




  swap(r1, c1, r2, c2) {
    let temp = this.matrix[r1][c1];
    this.matrix[r1][c1] = this.matrix[r2][c2];
    this.matrix[r2][c2] = temp;
  }

  move(r, c) {


    if (this.matrix.toString() != this.correct.toString()) {

      if ((c + 1) <= this.SIZE && this.matrix[r][c + 1] === this.BLANK) {
        this.swap(r, c, r, c + 1);
      }
      else if (c - 1 >= 0 && this.matrix[r][c - 1] === this.BLANK) {
        this.swap(r, c, r, c - 1);
      }
      else if (r - 1 >= 0 && this.matrix[r - 1][c] === this.BLANK) {
        this.swap(r, c, r - 1, c);
      }
      else if (r + 1 <= this.SIZE && this.matrix[r + 1][c] === this.BLANK) {
        this.swap(r, c, r + 1, c);
      }
    }

    if (this.matrix.toString() == this.correct.toString()) {
      this.showHiddenBlock = true;

    }







  }


  randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }






}

