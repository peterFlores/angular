import { Tarifa } from 'src/app/models/tarifa';


import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { Room } from 'src/app/models/room';


@Component({
  selector: 'app-rm-modal-update',
  templateUrl: './rm-modal-update.component.html',
  styles: []
})
export class RmModalUpdateComponent implements OnInit {

  @Input() tarifas: Tarifa[];
  @Input() room: Room;
  @Output() editarRoom = new EventEmitter<Room>();
  formulario: FormGroup;

  isValidFormSubmitted = null;

  constructor(public activeModal: NgbActiveModal) {
    this.formulario = new FormGroup({
      idRoom: new FormControl(''),
      room: new FormControl('', [Validators.required, Validators.minLength(3)]),
      checkIn: new FormControl(null, ),
      checkOut: new FormControl(null),
      status: new FormControl('D'),
      tarifa: new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {

    this.formulario.setValue(this.room);

    console.log(this._tarifa.value);


  }
  compareFn(item1, item2): boolean {
    return item1 && item2 ? item1.idTarifa === item2.idTarifa : item1 === item2;
  }
  onFormSubmit() {
    this.isValidFormSubmitted = false;
     if (this.formulario.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.editarRoom.emit(this.formulario.value);
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
