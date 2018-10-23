import { Component, OnInit } from '@angular/core';
import { Huespedes } from 'src/app/models/huesped';
import { HuespedService } from 'src/app/services/huesped.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HModalSaveComponent } from '../shared/modals/modal-huesped/form/save/h-modal-save.component';
import { ModalDeleteComponent } from '../shared/modals/modal-huesped/delete/modal-delete.component';
import { HModalUpdateComponent } from '../shared/modals/modal-huesped/form/update/h-modal-update.component';

@Component({
  selector: 'app-huespedes',
  templateUrl: './huespedes.component.html',
  styleUrls: ['./huespedes.component.css']
})
export class HuespedesComponent implements OnInit {

  huespedes: Huespedes[];
  constructor(private huespedService: HuespedService, private modalService: NgbModal) { }

  ngOnInit() {
    this.huespedService.getHuespedes().subscribe(
      data => this.huespedes = data
    );
  }

  save() {
    const modalRef = this.modalSetting(HModalSaveComponent);
    modalRef.componentInstance.agregarHuesped.subscribe((emmitedValue) => {
      this.saveHuesped(emmitedValue);
    });
  }

  delete(huespedSelected: Huespedes) {
    const modalRef = this.modalSetting(ModalDeleteComponent);
    modalRef.componentInstance.huesped = huespedSelected;
    modalRef.componentInstance.delete.subscribe((emmitedValue) => {
      this.deleteHuesped(emmitedValue);
    });
  }

  edit (huespedSelected: Huespedes) {
    const modalRef = this.modalSetting(HModalUpdateComponent);
    modalRef.componentInstance.huesped = huespedSelected;
    modalRef.componentInstance.editarHuesped.subscribe((emmitedValue) => {
      this.editHuesped(emmitedValue);
    });
  }



  editHuesped(huesped: Huespedes) {
    this.huespedService.updateHuesped(huesped).subscribe(() => this.ngOnInit());
  }

  saveHuesped(huesped: Huespedes) {
    this.huespedService.saveHuesped(huesped).subscribe(() => this.ngOnInit());
  }

  deleteHuesped(huesped: Huespedes) {
    this.huespedService.deleteHuespedById(huesped.idHuesped).subscribe(() => {
      this.huespedes = this.huespedes.filter(tf => tf !== huesped);
    });
  }

  modalSetting(modal: any) {
    return this.modalService.open(modal);
  }
}
