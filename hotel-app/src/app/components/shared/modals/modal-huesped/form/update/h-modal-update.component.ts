import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Huespedes } from 'src/app/models/huesped';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-h-modal-update',
  templateUrl: './h-modal-update.component.html'
})
export class HModalUpdateComponent implements OnInit {
  @Output() editarHuesped = new EventEmitter<Huespedes>();
  @Input() huesped: Huespedes;
  formulario: FormGroup;

  isValidFormSubmitted = null;

  constructor(public activeModal: NgbActiveModal) {
    this.formulario = new FormGroup({
      idHuesped: new FormControl(''),
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(5)]),
      edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(2)]),
      genero: new FormControl(null, Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'),
                                    Validators.minLength(7), Validators.maxLength(9)]),
      dpi: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

  }

  ngOnInit() {
    this.formulario.setValue(this.huesped);
  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
     if (this.formulario.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.editarHuesped.emit(this.formulario.value);
     this.activeModal.close("Save Click");
     this.formulario.reset();
  }

  get _nombre() {
    return this.formulario.get('nombre');
  }

  get _apellido() {
    return this.formulario.get('apellido');
  }

  get _direccion() {
    return this.formulario.get('direccion');
  }

  get _edad() {
    return this.formulario.get('edad');
  }

  get _genero() {
    return this.formulario.get('genero');
  }

  get _telefono() {
    return this.formulario.get('telefono');
  }

  get _dpi() {
    return this.formulario.get('dpi');
  }


}
