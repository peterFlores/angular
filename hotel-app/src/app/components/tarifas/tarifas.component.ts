import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/tarifa.service';
import { Tarifa } from '../../models/tarifa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTarifaComponent } from '../shared/modals/modal-tarifa/delete/modal-tarifa.component';
import { ModalFormTarifaComponent } from '../shared/modals/modal-tarifa/form/update/modal-form.component';
import { ModalSaveComponent } from '../shared/modals/modal-tarifa/form/save/modal-save.component';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  tarifas: Tarifa[];

  mySubscription: any;

  constructor(private tarifaSerive: TarifaService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
      this.tarifaSerive.getTarifas().subscribe(
        tarifas => this.tarifas = tarifas
      );
  }


  open (tarifaSelected: Tarifa) {
    const modalRef = this.modalService.open(ModalTarifaComponent);
    modalRef.componentInstance.tarifa = tarifaSelected;
    modalRef.componentInstance.delete.subscribe((emmitedValue) => {
      this.deleteTarifa(emmitedValue);
    });
  }

  deleteTarifa(tarifa: Tarifa) {
    this.tarifaSerive.deleteTarifaById(tarifa.idTarifa).subscribe(
      (data) => {
        this.tarifas = this.tarifas.filter(tf => tf !== tarifa);
      }
    );
  }
  edit(tarifa: Tarifa) {
    const modalRef = this.modalService.open(ModalFormTarifaComponent);
    modalRef.componentInstance.tarifa = tarifa;
    modalRef.componentInstance.updateTarifa.subscribe((emmitedValue) => {
      this.modificarTarifa(emmitedValue);
    });
  }

  modificarTarifa(tarifa: Tarifa) {
    console.log("entro", tarifa);
    this.tarifaSerive.updateTarifa(tarifa).subscribe(() => {
      this.ngOnInit();
    });
  }

  save() {
    const modalRef = this.modalService.open(ModalSaveComponent);
    modalRef.componentInstance.agregar.subscribe((emmitedValue) => {
      this.agregarTarifa(emmitedValue);
    });
  }

  agregarTarifa(tarifa: Tarifa) {
    this.tarifaSerive.saveTarifa(tarifa).subscribe((params) => {
      this.ngOnInit();
    });
  }
}
