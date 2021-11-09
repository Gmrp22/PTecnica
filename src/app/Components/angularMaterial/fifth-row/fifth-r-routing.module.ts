import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthRowComponent } from './fifth-row.component';

const routes: Routes = [{ path: '', component:  FifthRowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FifthRRoutingModule { }
