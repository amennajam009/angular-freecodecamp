import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Module2Component } from './module2.component';
import { TestCompComponent } from './test-comp/test-comp.component';


@NgModule({
  declarations: [
    Module2Component,
    TestCompComponent
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
