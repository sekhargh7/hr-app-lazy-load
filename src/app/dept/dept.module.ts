import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptComponent } from './components/mgmt/dept.component';
import {RouterModule, Routes} from "@angular/router";

import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: '',
    component: DeptComponent
  }
];

@NgModule({
  declarations: [
    DeptComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule
  ],
  exports: [RouterModule]
})
export class DeptModule { }
