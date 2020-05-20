import { Component } from '@angular/core'; @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  correct = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  matrix = [[0, 2, 3, 9], [10, 14, 4, 8], [11, 5, 7, 6], [12, 13, 1, 15]
  ]
  SIZE = this.matrix.length;
  BLANK = 15
  showHiddenBlock = false;
  showHint: boolean = false;
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
}

