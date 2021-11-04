import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/app.component.sass', './styles/tarea.sass', './styles/alertas.sass', './styles/modulos.sass'],
})
export class AppComponent {
  title = 'PTecnica';
  tableShow = false;
  formShow = false;
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
  alerta = '';
  visible = false;
  success = false;
  warning = false;
  danger = false;
  /*
 Muestra tabla si se selecciona un pais
 */
  showTable() {
    this.tableShow = true;
    this.formShow = false;
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
  /*
  Esconde el form
  */
  hideForm() {
    this.formShow = false;
  }
  /*
 Muestra el form
 */
  showForm() {
    this.formShow = true;
    this.tableShow = false;
  }
  /*
    Lee la respuesta gracias al output del form,
   el codigo de status puede variar y dependiendo de este se aplica una clase a la alerta
   */
  alertas(response: any) {
    this.alerta = response.msg;
    this.visible = true;
    if (response.status == 1) {
      this.success = true;
    } else if (response.status == 2) {
      this.danger = true;
    } else {
      this.warning = true;
    }
    setTimeout(() => {
      this.visible = false;
      this.alerta = '';
      this.success = false;
      this.warning = false;
      this.danger = false;
    }, 3000);

  }

  
}
