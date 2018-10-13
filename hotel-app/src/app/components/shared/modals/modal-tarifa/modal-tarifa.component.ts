import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Tarifa } from 'src/app/models/tarifa';
@Component({
  selector: 'app-modal-tarifa',
  templateUrl: './modal-tarifa.component.html',
  styleUrls: ['./modal-tarifa.component.css']
})
export class ModalTarifaComponent {
  @Input() tarifa: Tarifa;
  @Output() delete = new EventEmitter<number>();
  closeResult: string;

  constructor( public activeModal: NgbActiveModal) {}

  deleteTarifa() {
    this.delete.emit(this.tarifa.idTarifa);
    this.activeModal.close("Save Click");
  }

}
