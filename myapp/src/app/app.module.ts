import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { App1Module } from 'projects/app1/src/public-api';
import { App2Module } from 'projects/app2/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App1Module,
    App2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
