import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Reservacion } from 'src/app/models/reservacion';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { ReModalSaveComponent } from '../shared/modals/modal-reservaciones/re-modal-save/re-modal-save.component';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReservacionesComponent implements OnInit {

  reservaciones: Reservacion[];
  constructor(private reservacionService: ReservacionService, private modalService: NgbModal) { }

  ngOnInit() {
    this.reservacionService.getReservaciones().subscribe(
      data => this.reservaciones = data
    );
  }

  save() {
    const modalRef = this.modalSetting(ReModalSaveComponent);
  }

  saveReservacion(reservacion: Reservacion) {

  }

  modalSetting(modal: any) {
    return this.modalService.open(modal,  {size: 'lg', windowClass: 'modal-xxl'});
  }
}
