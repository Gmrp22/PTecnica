import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-row',
  templateUrl: './third-row.component.html',
  styleUrls: ['./third-row.component.sass']
})
export class ThirdRowComponent implements OnInit {
  columns:number
  columnas:number[]

  constructor() {
    this.columns=8
    this.columnas = [1,2,3,2,1,4,3,1]

   }

  ngOnInit(): void {
  }

}
