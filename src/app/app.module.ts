import { InitService } from './shared/init.service';
import { Module1Module } from './eager-load/module-1/module-1.module';
import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import {  HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ErrorDirective } from './directives/error.directive';


//? APP_INITALIZER function that runs before the application starts
function initDataToLoadsFirst(InitService:InitService){
return InitService.init()
}
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
    CardComponent,
    SidenavComponent,
    ErrorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module,
    Module2Module,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  //?APP_INITIALIZER is used to loads the data or service before application starts
  // providers: [
  //   {
  //     provide:APP_INITIALIZER,
  //     useFactory:initDataToLoadsFirst,
  //     deps : [InitService],
  //     multi:true
  //   }
  // ],

  bootstrap: [AppComponent]
})
//yeh humra root module hota hai 
export class AppModule { }
