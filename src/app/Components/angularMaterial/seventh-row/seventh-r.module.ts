import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeventhRRoutingModule } from './seventh-r-routing.module';
import { SeventhRowComponent } from './seventh-row.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
    SeventhRowComponent
  ],
  imports: [
    CommonModule,
    SeventhRRoutingModule,
    AngularMaterialModule
  ]
})
export class SeventhRModule { }
