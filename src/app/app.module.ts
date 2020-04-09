import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RadioComponent } from './components/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
