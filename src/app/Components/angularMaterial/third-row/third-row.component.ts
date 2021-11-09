import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BottomSheetOverviewExampleSheet } from '../an-material/an-material.component';
@Component({
  selector: 'app-third-row',
  templateUrl: './third-row.component.html',
  styleUrls: ['./third-row.component.sass'],
})
export class ThirdRowComponent implements OnInit {
  columns: number;
  columnas: number[];

  constructor(public dialog: MatDialog) {
    this.columns = 8;
    this.columnas = [1, 2, 3, 2, 1, 4, 3, 1];
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {}
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'd.html',
})
export class DialogContentExampleDialog {}