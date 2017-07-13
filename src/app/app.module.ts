import 'rxjs/add/operator/map';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FotoModule } from '../foto/foto.module';
import { PainelModule } from '../painel/painel.module';
import { TesteComponent } from './teste/teste.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule, FotoModule, HttpModule, PainelModule, routing, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
