// Modules
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './Components/app/app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TableComponent } from './Components/table/table.component';
import { PaginacionComponent } from './Components/paginacion/paginacion.component';
import { FormComponent } from './Components/form/form.component';
import { AnMaterialComponent } from './Components/an-material/an-material.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, TableComponent, PaginacionComponent, FormComponent, AnMaterialComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
