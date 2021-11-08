import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fourth-row',
  templateUrl: './fourth-row.component.html',
  styleUrls: ['./fourth-row.component.sass']
})
export class FourthRowComponent implements OnInit {
  email = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }
saludo(){
  alert("Saludo desde action list")
}
}
