import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-row',
  templateUrl: './second-row.component.html',
  styleUrls: ['./second-row.component.sass']
})
export class SecondRowComponent implements OnInit {
  labelPosition:"before"
  constructor() { 
    this.labelPosition="before"
  }

  ngOnInit(): void {
  }

}
