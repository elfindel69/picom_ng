import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ErrorComponent } from './views/error/error.component';
import { HomeComponent } from './views/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TarifsComponent } from './views/tarifs/tarifs.component';
import { HeaderComponent } from './components/header/header.component';
import { StatsComponent } from './views/stats/stats.component';
import { AvisComponent } from './views/avis/avis.component';
import {AuthService} from "./services/auth/auth.service";
import { LoginComponent } from './views/login/login.component';
import { ClientIndexComponent } from './views/client-index/client-index.component';
import { ClientHeaderComponent } from './components/client-header/client-header.component';
import { ClientService } from './services/client/client.service';
import { AnnonceService } from './services/annonce/annonce.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    TarifsComponent,
    HeaderComponent,
    StatsComponent,
    AvisComponent,
    LoginComponent,
    ClientIndexComponent,
    ClientHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientService,AnnonceService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
