import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/tarifa.service';
import { Tarifa } from '../../models/tarifa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTarifaComponent } from '../shared/modals/modal-tarifa/modal-tarifa.component';

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
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  deleteTarifa(id: number) {
    this.tarifaSerive.deleteTarifaById(id);
  }


}
