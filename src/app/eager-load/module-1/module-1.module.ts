import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module-1-routing.module';

console.log('Module-1 Loads')

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
