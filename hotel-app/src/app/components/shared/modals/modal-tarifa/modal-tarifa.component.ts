import { Component, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-tarifa',
  templateUrl: './modal-tarifa.component.html',
  styleUrls: ['./modal-tarifa.component.css']
})
export class ModalTarifaComponent {
  @Input() name;
  closeResult: string;

  constructor( public activeModal: NgbActiveModal) {}


}
