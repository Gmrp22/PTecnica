import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthRowComponent } from './fourth-row.component';

const routes: Routes = [{ path: '', component: FourthRowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthRRoutingModule { }
