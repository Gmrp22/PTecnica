import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SixthRRoutingModule } from './sixth-r-routing.module';
import { SixthRowComponent } from './sixth-row.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
    SixthRowComponent
  ],
  imports: [
    CommonModule,
    SixthRRoutingModule, 
    AngularMaterialModule
  ]
})
export class SixthRModule { }
