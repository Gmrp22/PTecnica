import { Component, OnInit, OnChanges } from '@angular/core';
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
  submitted=false
  constructor(private formBuilder: FormBuilder, private notification:NotificationService) {
    this.Form = this.formBuilder.group({
      nombre: ['', Validators.required],
      fecha: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
    },
   
    );
  }

  ngOnInit(): void {}
  
  submit() {
    this.submitted = true;

    if (this.Form.valid) {
      let msg="Muchas gracias" + this.Form.get('nombre')?.value + 'por suscribirte a nuestro servicio.  Recibiras informacíon al correo: '+ this.Form.get('correo')?.value
      this.notification.success(msg)
      
    } else {
      this.notification.error("Información no valida")
    }
  }

  get registerFormControl() {
    return this.Form.controls;
  }
}
