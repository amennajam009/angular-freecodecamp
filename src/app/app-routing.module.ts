import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  // {path:'' , component:SidenavComponent},
  {path:'home' , component:HomeComponent},
  {path: 'practice',component:ParentComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
