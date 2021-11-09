import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'firstR',
    loadChildren: () =>
      import('./Components/angularMaterial/an-material/first-r.module').then(
        (m) => m.FirstRModule
      ),
  },
  {
    path: 'secondR',
    loadChildren: () =>
      import('./Components/angularMaterial/second-row/second-r.module').then(
        (m) => m.SecondRModule
      ),
  },
  {
    path: 'thirdR',
    loadChildren: () =>
      import('./Components/angularMaterial/third-row/third-r.module').then(
        (m) => m.ThirdRModule
      ),
  },
  {
    path: 'fourthR',
    loadChildren: () =>
      import('./Components/angularMaterial/fourth-row/fourth-r.module').then(
        (m) => m.FourthRModule
      ),
  },
  {
    path: 'fifthR',
    loadChildren: () =>
      import('./Components/angularMaterial/fifth-row/fifth-r.module').then(
        (m) => m.FifthRModule
      ),
  },
  {
    path: 'sixthR',
    loadChildren: () =>
      import('./Components/angularMaterial/sixth-row/sixth-r.module').then(
        (m) => m.SixthRModule
      ),
  },
  {
    path: 'seventhR',
    loadChildren: () =>
      import('./Components/angularMaterial/seventh-row/seventh-r.module').then(
        (m) => m.SeventhRModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
