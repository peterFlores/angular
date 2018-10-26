import { FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { Empleados } from './../../../../../models/empleado';
import { EventEmitter, Output } from '@angular/core';
import { Roles } from 'src/app/models/roles';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emodal-update',
  templateUrl: './emodal-update.component.html',
  styles: []
})
export class EmodalUpdateComponent implements OnInit {

  @Input() roles: Roles[];
  @Output() editarEmpleado = new EventEmitter<Empleados>();
  @Input() employee: Empleados;

  formulario: FormGroup;

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
    this.formulario.setValue(this.employee);
  }

  compareFn(item1, item2): boolean {
    return item1 && item2 ? item1.tipoEmpleadoID === item2.tipoEmpleadoID : item1 === item2;
  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
     if (this.formulario.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.editarEmpleado.emit(this.formulario.value);
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
