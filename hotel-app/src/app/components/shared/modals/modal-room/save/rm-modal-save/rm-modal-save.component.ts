
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';

import { Room } from './../../../../../../models/room';
import { Input, Output, EventEmitter } from '@angular/core';
import { Tarifa } from 'src/app/models/tarifa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rm-modal-save',
  templateUrl: './rm-modal-save.component.html',
  styles: []
})
export class RmModalSaveComponent implements OnInit {

  @Input() tarifas: Tarifa[];
  @Output() agregarRoom = new EventEmitter<Room>();
  formulario: FormGroup;

  isValidFormSubmitted = null;

  constructor(public activeModal: NgbActiveModal) {
    this.formulario = new FormGroup({
      idRoom: new FormControl(''),
      room: new FormControl('', [Validators.required, Validators.minLength(3)]),
      checkIn: new FormControl(null, ),
      checkOut: new FormControl(null),
      status: new FormControl('D'),
      tarifa: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
     if (this.formulario.invalid) {
        return;
     }
     console.log(this.formulario.value);
     this.isValidFormSubmitted = true;
     this.agregarRoom.emit(this.formulario.value);
     this.activeModal.close("Save Click");
     this.formulario.reset();
  }

  get _room() {
    return this.formulario.get('room');
  }

  get _tarifa() {
    return this.formulario.get('tarifa');
  }
}
