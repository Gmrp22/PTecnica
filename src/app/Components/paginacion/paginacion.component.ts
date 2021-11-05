import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CovidService } from 'src/app/services/covid/covid.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.sass'],
})
export class PaginacionComponent implements OnInit {
  yellowcolor = false;
  purplecolor = true;
  state = false;
  @ContentChild(DashboardComponent) contentChild!: DashboardComponent;
  //lifecycle hooks
  constructor(private notifix: NotificationService) {}

  //Se ejecuta despues de que se renderizo los datos input. Va despues de onChanges y solo una vez
  ngOnInit(): void {
    //Inicializa el fondo a color amarillo y borde morado
    this.yellowcolor = true;
    this.purplecolor = false;
    this.state = false;
    console.log('on_init 2');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on_changes 2');
  }

  //Detecta cambios que angular no, va despues de onchanges y oninit
  ngDoCheck(): void {
    //Dependiendo del estado cambiara los colores del boton
    if (this.state) {
      this.yellowcolor = false;
      this.purplecolor = true;
    } else {
      this.yellowcolor = true;
      this.purplecolor = false;
    }
    console.log('do_check 2');
  }

  clickChange() {
    //Cambiara el estado, que sera evaluado por ngdocheck
    if (this.state) {
      this.state = false;
    } else {
      this.state = true;
    }
  }

  //aftercontent init, despues de que se ha proyectado contenido de otro html a el componente. Se llama despues de ngdocheck
  ngAfterContentInit(): void {
    alert('Dash proyectado inicializado');
    console.log('after_content_init 2');
  }
  //aftercontentchecked init, despues de que se hay cambios. Se llama despues de ngdocheck
  ngAfterContentChecked(): void {
    console.log('after_content_checked 2');
  }
}
