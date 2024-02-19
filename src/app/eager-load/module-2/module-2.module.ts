import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module-2-routing.module';

console.log('Module-2 Loads')

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
