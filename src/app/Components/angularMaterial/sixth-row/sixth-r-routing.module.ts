import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixthRowComponent } from './sixth-row.component';

const routes: Routes = [{ path: '', component: SixthRowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SixthRRoutingModule { }
