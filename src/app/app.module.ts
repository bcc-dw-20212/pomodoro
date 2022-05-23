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
import { StarpersonComponent } from './starperson/starperson.component';
import { pomodoroReducer } from './pomodoro/store/pomodoro.reducers';

/*
  O objeto appRoutes (não é obrigatório esse nome), do tipo Routes, é uma lista
  onde configuramos nossas rotas com objetos que tenham os atributos path e component.

  O atributo path é o caminho que ao ser acessado renderizará o component apontado ao lado.

  Importante notar que no exemplo abaixo, o path '' significa, por exemplo: http://localhost:4200/

  Se ele fosse users, seria: http://localhost:4200/users

  Este objeto será utilizado para configurar o uso de rotas mais abaixo neste arquivo.
*/
const appRoutes: Routes = [
  { path: '', component: PomodoroComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'swp/:id', component: StarpersonComponent },
  { path: 'swp', component: StarpersonComponent }
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
    CicloconfigComponent,
    StarpersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Configurando a store (reducers)
    StoreModule.forRoot({ appPomodoro: pomodoroReducer }, {}),
    /* O RouterModule habilita a navegação entre rotas dinamicamente no frontend.
    Passamos para ele as rotas descritas no appRoute acima descrito.*/
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
