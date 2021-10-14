import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
  data: any;
  @Input() iso = '';
  constructor() {}
  ngOnInit(): void {}

  tableData(response: any) {
    this.data = response;
  }
}
