import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FifthRRoutingModule } from './fifth-r-routing.module';
import { FifthRowComponent } from './fifth-row.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
    FifthRowComponent
  ],
  imports: [
    CommonModule,
    FifthRRoutingModule,
    AngularMaterialModule
  ]
})
export class FifthRModule { }
