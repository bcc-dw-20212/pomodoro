import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QualquerComponent } from './qualquer/qualquer.component';
import { CaixaexemploComponent } from './caixaexemplo/caixaexemplo.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { BotaoComponent } from './calculadora/botao/botao.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TelaComponent } from './pomodoro/tela/tela.component';
import { BotaoPomoComponent } from './pomodoro/botao/botao.component';
import { CicloconfigComponent } from './pomodoro/cicloconfig/cicloconfig.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: PomodoroComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    QualquerComponent,
    CaixaexemploComponent,
    CalculadoraComponent,
    BotaoComponent,
    PomodoroComponent,
    TelaComponent,
    BotaoPomoComponent,
    CicloconfigComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
