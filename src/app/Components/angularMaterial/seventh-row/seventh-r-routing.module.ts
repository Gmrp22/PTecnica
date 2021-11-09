import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeventhRowComponent } from './seventh-row.component';

const routes: Routes = [{ path: '', component: SeventhRowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeventhRRoutingModule { }
