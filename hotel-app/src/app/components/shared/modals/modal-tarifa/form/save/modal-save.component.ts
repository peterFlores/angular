import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Tarifa } from "src/app/models/tarifa";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-modal-save",
  templateUrl: "./modal-save.component.html"
})
export class ModalSaveComponent implements OnInit {
  @Output() agregar = new EventEmitter<Tarifa>();

  formulario: FormGroup;
  tarifa: Tarifa;

  isValidFormSubmitted = null;

  constructor(public activeModal: NgbActiveModal) {
    this.formulario = new FormGroup({
      idTarifa: new FormControl(""),
      tarifa: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      costo: new FormControl("", [
        Validators.required,
        Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')
      ])
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
     this.agregar.emit(this.formulario.value);
     this.activeModal.close("Save Click");
     this.formulario.reset();
  }

  get _tarifa() {
    return this.formulario.get("tarifa");
  }
  get _costo() {
    return this.formulario.get("costo");
  }
}
