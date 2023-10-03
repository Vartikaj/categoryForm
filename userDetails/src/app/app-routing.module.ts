import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDetailsComponent } from './components/add-details/add-details.component';
const routes: Routes = [
  { path: 'addDetails', component: AddDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
