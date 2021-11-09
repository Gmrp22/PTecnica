import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-sixth-row',
  templateUrl: './sixth-row.component.html',
  styleUrls: ['./sixth-row.component.sass'],
})
export class SixthRowComponent implements OnInit {
  showFiller = false;
  constructor(private _snackBar: MatSnackBar) {}
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit(): void {}
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'a', weight: 5 },
  { position: 2, name: 'b', weight: 234 },
  { position: 3, name: 'c', weight: 545 },
];
