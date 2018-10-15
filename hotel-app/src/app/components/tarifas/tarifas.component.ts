import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/tarifa.service';
import { Tarifa } from '../../models/tarifa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTarifaComponent } from '../shared/modals/modal-tarifa/delete/modal-tarifa.component';
import { ModalFormTarifaComponent } from '../shared/modals/modal-tarifa/form/modal-form.component';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  tarifas: Tarifa[];
  constructor(private tarifaSerive: TarifaService, private modalService: NgbModal) { }

  ngOnInit() {
    this.tarifaSerive.getTarifas().subscribe(
      tarifas => this.tarifas = tarifas
    );
  }

  open (tarifaSelected: Tarifa) {
    console.log(tarifaSelected.idTarifa);
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
  editOrSave(tarifa: Tarifa) {
    const modalRef = this.modalService.open(ModalFormTarifaComponent);
  }
}
