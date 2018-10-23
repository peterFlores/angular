import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Huespedes } from 'src/app/models/huesped';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styles: []
})
export class ModalDeleteComponent  {

  @Input() huesped: Huespedes;

  @Output() delete = new EventEmitter<Huespedes>();
  closeResult: string;

  constructor( public activeModal: NgbActiveModal) {}

  deleteHuesped() {
    this.delete.emit(this.huesped);
    this.activeModal.close("Save Click");
  }
}
