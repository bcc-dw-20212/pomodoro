import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QualquerComponent } from './qualquer/qualquer.component';
import { CaixaexemploComponent } from './caixaexemplo/caixaexemplo.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { BotaoComponent } from './calculadora/botao/botao.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QualquerComponent,
    CaixaexemploComponent,
    CalculadoraComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
