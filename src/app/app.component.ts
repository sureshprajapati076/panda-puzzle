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

    this.shuffleByUser();


  }

  shuffleByUser() {
    while (!this.shuffle());

    let c = 0;
    let index0 = this.randomArray.indexOf(0);
    let index15 = this.randomArray.indexOf(15);
    this.randomArray[index0] = 15;
    this.randomArray[index15] = 0;

    for (let i = 0; i < this.SIZE; i++) {
      for (let j = 0; j < this.SIZE; j++) {
        this.matrix[i][j] = this.randomArray[c++];

      }
    }
  }





  shuffle() {

    this.randomArrayShuffle(this.randomArray);

    let parity = 0;
    let gridWidth = 4;
    let row = 0; // the current row we are on
    let blankRow = 0; // the row with the blank tile

    for (let i = 0; i < this.randomArray.length; i++) {
      if (i % gridWidth == 0) { // advance to next row
        row++;
      }
      if (this.randomArray[i] == 0) { // the blank tile
        blankRow = row; // save the row on which encountered
        continue;
      }
      for (let j = i + 1; j < this.randomArray.length; j++) {
        if (this.randomArray[i] > this.randomArray[j] && this.randomArray[j] != 0) {
          parity++;
        }
      }
    }

    if (gridWidth % 2 == 0) { // even grid
      if (blankRow % 2 == 0) { // blank on odd row; counting from bottom
        return parity % 2 == 0;
      } else { // blank on even row; counting from bottom
        return parity % 2 != 0;
      }
    } else { // odd grid
      return parity % 2 == 0;
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

