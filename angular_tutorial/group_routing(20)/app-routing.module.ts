import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

import {AdminRoutingModule} from './admin/admin-routing.module'
import {UserRoutingModule} from './user/user-routing.module'

// Here I add routing paths and components
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent 
  },
  {
    path:"admin",
    component:AdminRoutingModule 
  },
  {
    path:"user",
    component:UserRoutingModule 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
