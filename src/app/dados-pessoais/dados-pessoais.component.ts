import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
nome = "Romário Dias Paz";
sexo = "Masculino";
idade = 29;
estadoCivil = "Solteiro";
endereco = "Rua Pedro Moura Brito";
numero = 891;
cidade = "Paraíso do Tocantins";
telefone = "(99)99999-7777";
email = "romariodp07@gmail.com";

}
