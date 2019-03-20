import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { ExperienciaProfissionalComponent } from './experiencia-profissional/experiencia-profissional.component';
import { QualificacoesComponent } from './qualificacoes/qualificacoes.component';
import { InformacoesAdicionaisComponent } from './informacoes-adicionais/informacoes-adicionais.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    DadosPessoaisComponent,
    FormacaoComponent,
    ExperienciaProfissionalComponent,
    QualificacoesComponent,
    InformacoesAdicionaisComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
