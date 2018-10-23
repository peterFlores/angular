import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Roles } from 'src/app/models/roles';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rmodal-update',
  templateUrl: './rmodal-update.component.html',
  styleUrls: ['./rmodal-update.component.css']
})
export class RmodalUpdateComponent implements OnInit {
  @Output() editarRol = new EventEmitter<Roles>();
  @Input() rol: Roles;
  formulario: FormGroup;


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
    this.formulario.setValue(this.rol);
  }
  onFormSubmit() {
    this.isValidFormSubmitted = false;
     if (this.formulario.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.editarRol.emit(this.formulario.value);
     this.activeModal.close("Save Click");
     this.formulario.reset();
  }

  get _nombreTipoEmpleado() {
    return this.formulario.get("nombreTipoEmpleado");
  }
}
