import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification/notification.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  public Form = this.formBuilder.group({
    nombre: '',
    fecha: '',
    correo: '',
  });
  submitted = false;
  @Output() alert = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder,
    private notification: NotificationService
  ) {
    this.Form = this.formBuilder.group({
      nombre: ['', Validators.required],
      fecha: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}
  // Devuelve un objeto que contiene el mensaje y un codigo de status
  submit() {
    this.submitted = true;

    if (this.Form.valid) {
      let msg =
        'Muchas gracias' +
        this.Form.get('nombre')?.value +
        ' por suscribirte a nuestro servicio.  Recibiras informacíon al correo: ' +
        this.Form.get('correo')?.value;
      // this.notification.success(msg);
      let obj = { msg: msg, status: 1 };
      this.alert.emit(obj);
    } else {
      // this.notification.error('Información no valida');
      let obj = { msg: 'Informacion no valida', status: 2 };
      this.alert.emit(obj);
    }
  }

  get registerFormControl() {
    return this.Form.controls;
  }
}
