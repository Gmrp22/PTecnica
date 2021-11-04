import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  ViewChild,
  ContentChild,
} from '@angular/core';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PaginacionComponent } from '../paginacion/paginacion.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent {
  data: any;
  //variable para cambios
  change: boolean;
  msg = '';
  //variable para mostrar componente hijo
  showhijo = false;
  //Variables para acceder a la vista hija
  @ViewChild(PaginacionComponent) viewChild!: PaginacionComponent;
  //Variables para acceder al contenido projected

  @Input() iso = '';

  constructor(private notifix: NotificationService) {
    this.change = false;
  }

  //Revisa por cambios en input, es el primero en ejecutarse.
  ngOnChanges(changes: SimpleChanges): void {
    //Si cambia el input mostrara un mensaje indicandolo
    if (this.iso != changes.iso.previousValue) {
      this.change = true;
      this.msg =
        'El iso seleccionado es: ' +
        this.iso +
        ' El anterior es: ' +
        changes.iso.previousValue;
    }
  }

  tableData(response: any) {
    this.data = response;
  }

  showHijo() {
    this.showhijo = true;
  }

  //Se ejecuta antes de destruir el componente
  ngOnDestroy(): void {
    //Muestra una alerta de adios
    alert('Adios desde boton');
  }

  //se ejecuta despues que se inicializa el componente hijo
  ngAfterViewInit(): void {
    alert("paginacion hijo inicializado")
  }

  ngAfterViewChecked(): void {
    console.log("after_view_Checked")
  }
}
