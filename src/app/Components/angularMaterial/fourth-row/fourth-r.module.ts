import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourthRRoutingModule } from './fourth-r-routing.module';
import { FourthRowComponent } from './fourth-row.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FourthRowComponent
  ],
  imports: [
    CommonModule,
    FourthRRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FourthRModule { }
