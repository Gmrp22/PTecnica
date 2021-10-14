import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CovidService } from 'src/app/services/covid/covid.service';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.sass'],
})
export class PaginacionComponent implements OnInit {
  data: any;
  @Input() iso = '';
  @Output() newPageEvent = new EventEmitter<string>();

  constructor(private covid: CovidService) {}
  ngOnInit(): void {}
  newPage(number: number) {
    this.covid.getCountryData(this.iso).subscribe((val) => {
      console.log(val);
      this.newPageEvent.emit(this.data);
    });
  }
}
