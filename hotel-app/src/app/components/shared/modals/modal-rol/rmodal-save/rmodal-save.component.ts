import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Roles } from 'src/app/models/roles';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rmodal-save',
  templateUrl: './rmodal-save.component.html',
  styleUrls: ['./rmodal-save.component.css']
})
export class RmodalSaveComponent implements OnInit {
  @Output() agregarRol = new EventEmitter<Roles>();

  formulario: FormGroup;
  rol: Roles;

  isValidFormSubmitted = null;

  constructor(public activeModal: NgbActiveModal) {
    this.formulario = new FormGroup({
      tipoEmpleadoID: new FormControl(""),
      nombreTipoEmpleado: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      permisos: new FormControl("")
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
     this.agregarRol.emit(this.formulario.value);
     this.activeModal.close("Save Click");
     this.formulario.reset();
  }

  get _nombreTipoEmpleado() {
    return this.formulario.get("nombreTipoEmpleado");
  }
}
