import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent implements OnInit {
  formacoes = [
    {nivel:"Ensino Médio",local:"Colégio Estadual Profº José Nézio Ramos",status:"Concluído"},
    {nivel:"Superior",local:"Ceulp-Ulbra",status:"Cursando"},
  ];

  cursos = [
    {nome:"Curso de Informática Básica",local:"Impacto Informática",duracao:"1 ano"},
    {nome:"Curso de Informática Avançada",local:"Impacto Informática",duracao:"6 meses"},
    {nome:"Curso de Rede",local:"Unest",duracao:"8 meses"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
