import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRRoutingModule } from './second-r-routing.module';
import { SecondRowComponent } from './second-row.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
    SecondRowComponent
  ],
  imports: [
    CommonModule,
    SecondRRoutingModule,
    AngularMaterialModule
  ]
})
export class SecondRModule { }
