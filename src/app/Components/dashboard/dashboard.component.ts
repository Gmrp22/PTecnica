import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid/covid.service';
import { Data } from 'src/app/services/covid/interface/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  data :Data = {
    confirmed: 0,
    deaths: 0,
    recovered: 0,
  };
  constructor(private covid: CovidService) {}
/*Se obtiene los datos mundiales de covid */
  ngOnInit(): void {
    this.covid.getWorldData().subscribe((val) => {
     this.data = val
    });
  }
}
