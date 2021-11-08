import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./views/error/error.component";
import {HomeComponent} from "./views/home/home.component";
import { TarifsComponent } from './views/tarifs/tarifs.component';
import {StatsComponent} from "./views/stats/stats.component";
import {AvisComponent} from "./views/avis/avis.component";
import {LoginComponent} from "./views/login/login.component";

let IndexComponent;
const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path:'tarifs',component:TarifsComponent},
  {path:'stats',component:StatsComponent},
  {path:'avis',component:AvisComponent},
  {path: 'login',component:LoginComponent},
  {path: 'not-found',component:ErrorComponent},
  {path:"**",redirectTo:'not-found'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
