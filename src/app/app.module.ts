import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {MatCardModule} from '@angular/material/card';
import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';



import 'hammerjs';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    MatCardModule, 
    MatInputModule, 
    BrowserAnimationsModule, 
    MatListModule
  ],
  
  providers: [],
  bootstrap: [AppComponent], 
 
})
export class AppModule { }
