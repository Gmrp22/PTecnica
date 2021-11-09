import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdRowComponent } from './third-row.component';

const routes: Routes = [{ path: '', component: ThirdRowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdRRoutingModule { }
