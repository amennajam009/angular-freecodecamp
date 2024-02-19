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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    Module2Module,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//yeh humra root module hota hai 
export class AppModule { }
