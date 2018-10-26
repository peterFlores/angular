import { EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Empleados } from './../../../../../models/empleado';
import { Roles } from 'src/app/models/roles';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emodal-save',
  templateUrl: './emodal-save.component.html',
  styles: []
})
export class EmodalSaveComponent implements OnInit {

  @Input() roles: Roles[];
  @Output() agregarEmpleado = new EventEmitter<Empleados>();

  formulario: FormGroup;
  empl: Empleados;

  isValidFormSubmitted = null;

  constructor(public activeModal: NgbActiveModal) {
    this.formulario = new FormGroup({
      idUsuario: new FormControl(''),
      nombreUsuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidoUsuario: new FormControl('', [Validators.required, Validators.minLength(3)]),
      direccionUsuario: new FormControl('', [Validators.required, Validators.minLength(5)]),
      telefonoUsuario: new FormControl('', [Validators.required, Validators.pattern('^([0-9]){8}$')]),
      emailUsuario: new FormControl('', [Validators.required, Validators.pattern('[^@]+@[^\.]+\..+')]),
      tipoEmpleado: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
     if (this.formulario.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.agregarEmpleado.emit(this.formulario.value);
     this.activeModal.close("Save Click");
     this.formulario.reset();
  }

  get _nombre() {
    return this.formulario.get('nombreUsuario');
  }

  get _apellido() {
    return this.formulario.get('apellidoUsuario');
  }

  get _direccion() {
    return this.formulario.get('direccionUsuario');
  }

  get _telefono() {
    return this.formulario.get('telefonoUsuario');
  }
  get _email() {
    return this.formulario.get('emailUsuario');
  }

  get _rol() {
    return this.formulario.get('tipoEmpleado');
  }


}
