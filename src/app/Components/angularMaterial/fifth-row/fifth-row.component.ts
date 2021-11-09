import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-row',
  templateUrl: './fifth-row.component.html',
  styleUrls: ['./fifth-row.component.sass']
})
export class FifthRowComponent implements OnInit {
  arr=[1,2,3,4,5]
  red="red"
  constructor() { }

  ngOnInit(): void {
  }

}
