import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRRoutingModule } from './first-r-routing.module';
import { AnMaterialComponent, BottomSheetOverviewExampleSheet } from './an-material.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
  AnMaterialComponent,
  BottomSheetOverviewExampleSheet,
  ],
  imports: [
    CommonModule,
    FirstRRoutingModule,
    AngularMaterialModule
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet,
  ],
})
export class FirstRModule { }
