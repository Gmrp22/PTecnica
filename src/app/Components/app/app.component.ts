import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'PTecnica';
  tableShow = false;
  iso = '';
  paises = [
    { nombre: 'Guatemala', value: 'GT' },
    { nombre: 'El salvador', value: 'SV' },
    { nombre: 'Honduras', value: 'HN' },
    { nombre: 'Nicaragua', value: 'NI' },
    { nombre: 'Costa Rica', value: 'CR' },
    { nombre: 'Panama', value: 'PA' },
    { nombre: 'Belice', value: 'BZ' },
  ];
  /*
 Muestra tabla si se selecciona un pais
 */
  showTable() {
    this.tableShow = true;
    if (this.iso == 'N/A') {
      this.hideTable();
    }
  }
  /*
 Esconde tabla
 */
  hideTable() {
    this.tableShow = false;
  }
}
