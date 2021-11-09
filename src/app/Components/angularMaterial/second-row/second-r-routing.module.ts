import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondRowComponent } from './second-row.component';

const routes: Routes = [{ path: '', component: SecondRowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRRoutingModule { }
