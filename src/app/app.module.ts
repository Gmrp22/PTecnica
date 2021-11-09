// Modules
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Components
import { AppComponent } from './Components/app/app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TableComponent } from './Components/table/table.component';
import { PaginacionComponent } from './Components/paginacion/paginacion.component';
import { FormComponent } from './Components/form/form.component';
import { AnMaterialComponent, BottomSheetOverviewExampleSheet } from './Components/angularMaterial/an-material/an-material.component';
import { SecondRowComponent } from './Components/angularMaterial/second-row/second-row.component';
import {DialogContentExampleDialog, ThirdRowComponent} from  './Components/angularMaterial/third-row/third-row.component';
import { FourthRowComponent } from './Components/angularMaterial/fourth-row/fourth-row.component';
import { FifthRowComponent } from './Components/angularMaterial/fifth-row/fifth-row.component';
import { SixthRowComponent } from './Components/angularMaterial/sixth-row/sixth-row.component';
import { SeventhRowComponent } from './Components/angularMaterial/seventh-row/seventh-row.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
    PaginacionComponent,
    FormComponent,
    AnMaterialComponent,
    SecondRowComponent,
    ThirdRowComponent,
    FourthRowComponent,
    FifthRowComponent,
    SixthRowComponent,
    SeventhRowComponent,
    BottomSheetOverviewExampleSheet,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  entryComponents: [
    BottomSheetOverviewExampleSheet,
    DialogContentExampleDialog
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
