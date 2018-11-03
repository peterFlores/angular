import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pmodal-save',
  templateUrl: './pmodal-save.component.html',
  styleUrls: ['./pmodal-save.component.css']
})
export class PmodalSaveComponent implements OnInit {
  @Output() agregar = new EventEmitter<Producto>();

  formulario: FormGroup;


  isValidFormSubmitted = null;

  constructor(public activeModal: NgbActiveModal) {
    this.formulario = new FormGroup({
      idProducto: new FormControl(""),
      producto: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
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

  get _producto() {
    return this.formulario.get("producto");
  }
  get _costo() {
    return this.formulario.get("costo");
  }

}
