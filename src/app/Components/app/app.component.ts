import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'PTecnica';
  tableShow = false
  showTable(){
    this.tableShow = true
  }
  hideTable(){
    this.tableShow = false
  }
}
