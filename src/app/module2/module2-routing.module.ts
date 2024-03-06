import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module2Component } from './module2.component';
import { TestCompComponent } from './test-comp/test-comp.component';

const routes: Routes = [
  { path: '', component: Module2Component },
  {path: 'module2-Comp' , component:TestCompComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
