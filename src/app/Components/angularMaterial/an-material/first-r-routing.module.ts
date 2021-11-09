import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnMaterialComponent } from './an-material.component';

const routes: Routes = [{ path: '', component:  AnMaterialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRRoutingModule { }
