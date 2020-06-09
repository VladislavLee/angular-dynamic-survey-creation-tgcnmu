import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule, FormsModule,MaterialModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent,CreateSurveyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
