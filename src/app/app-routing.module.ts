import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainTableComponent } from './main-table/main-table.component';
import { TableTwoComponent } from './table-two/table-two.component';
import { TableThreeComponent } from './table-three/table-three.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  // {path:'' , component:SidenavComponent},
  {path:'home' , component:HomeComponent},
  {path: 'practice',component:ParentComponentComponent},
  {path: 'main-table',component:MainTableComponent},
  {path: 'table-two', component:TableTwoComponent},
  {path: 'table-3' , component:TableThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
