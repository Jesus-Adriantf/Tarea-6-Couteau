import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenderPage } from './gender.page';

const routes: Routes = [
  {
    path: '',
    component: GenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenderPageRoutingModule {}
