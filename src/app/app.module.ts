import { Module1Module } from './eager-load/module-1/module-1.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Module2Module } from './eager-load/module-2/module-2.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent2Component } from './child-component2/child-component2.component';
import { GetDynamicCompComponent } from './get-dynamic-comp/get-dynamic-comp.component';
import { ParentComponent } from './content-projection/parent/parent.component';
import { CardComponent } from './content-projection/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TableComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    ChildComponent2Component,
    GetDynamicCompComponent,
    ParentComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    Module2Module,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//yeh humra root module hota hai 
export class AppModule { }
