import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QualquerComponent } from './qualquer/qualquer.component';
import { CaixaexemploComponent } from './caixaexemplo/caixaexemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    QualquerComponent,
    CaixaexemploComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
