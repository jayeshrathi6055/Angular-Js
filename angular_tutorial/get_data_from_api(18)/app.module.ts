import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CutomStyleDirective } from './cutom-style.directive';
import { ElementStyleDirective } from './element-style.directive'

// For API
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CutomStyleDirective,
    ElementStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  //<-----Add Here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
