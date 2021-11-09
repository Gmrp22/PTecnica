import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRRoutingModule } from './third-r-routing.module';
import { DialogContentExampleDialog, ThirdRowComponent } from './third-row.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [
    ThirdRowComponent,
    DialogContentExampleDialog
  ],
  entryComponents: [
    DialogContentExampleDialog
  ],
  imports: [
    CommonModule,
    ThirdRRoutingModule,
    AngularMaterialModule
    
  ]
})
export class ThirdRModule { }
