import { Component, OnInit } from '@angular/core';
import { TarifaService } from '../../services/tarifa.service';
import { Tarifa } from '../../models/tarifa';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit {

  tarifas: Tarifa[];
  constructor(private tarifaSerive: TarifaService) { }

  ngOnInit() {
    this.tarifaSerive.getTarifas().subscribe(
      tarifas => this.tarifas = tarifas
    );
  }

}
