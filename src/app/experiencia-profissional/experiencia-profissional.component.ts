import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-profissional',
  templateUrl: './experiencia-profissional.component.html',
  styleUrls: ['./experiencia-profissional.component.css']
})
export class ExperienciaProfissionalComponent implements OnInit {
   experiencias = [
    {local:"Impacto Informática", cargo:"Instrutor de Informática",periodo: "1 anos"},
    {local:"Visão Informática", cargo:"Instrutor de Informática",periodo: "5 meses"},
    {local:"Selfassessoria", cargo:"Técnico de Informática",periodo: "3 anos e 4 meses"},
    {local:"Advocacia Aguiar", cargo:"Auxiliar de Escritório",periodo: "4 meses"},
    ];
  constructor() { }

  ngOnInit() {
  }

}
