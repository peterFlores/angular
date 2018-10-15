import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Tarifa } from 'src/app/models/tarifa';
@Component({
  selector: 'app-modal-tarifa',
  templateUrl: './modal-tarifa.component.html'
})
export class ModalTarifaComponent {
  @Input() tarifa: Tarifa;
  @Output() delete = new EventEmitter<Tarifa>();
  closeResult: string;

  constructor( public activeModal: NgbActiveModal) {}

  deleteTarifa() {
    this.delete.emit(this.tarifa);
    this.activeModal.close("Save Click");
  }

}
