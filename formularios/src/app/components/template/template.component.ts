import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario: any = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };
  sexos: string[] = ['Hombre', 'Mujer'];
  paises = [
    {
      codigo: 'GT',
      pais: 'Guatemala'
    },
    {
      codigo: 'SV',
      pais: 'Salvador'
    },
    {
      codigo: 'CR',
      pais: 'Costa Rica'
    },
    {
      codigo: 'PA',
      pais: 'Panama'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('formularo', forma);
    console.log('valor', forma.value);
    console.log('Usuario', this.usuario);
  }
}
