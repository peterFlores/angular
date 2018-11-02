import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FacturaService } from 'src/app/services/factura.service';
import { Factura } from 'src/app/models/factura';
import { HuespedService } from 'src/app/services/huesped.service';
import { Huespedes } from 'src/app/models/huesped';

@Component({
  selector: 'app-detalle-huesped',
  templateUrl: './detalle-huesped.component.html',
  styleUrls: ['./detalle-huesped.component.css']
})
export class DetalleHuespedComponent implements OnInit {

  facturas: Factura[];
  huespedes: Huespedes;
  id: number;
  constructor(private facturaService: FacturaService, private router: Router,
    private activeRouter: ActivatedRoute, private huespedService: HuespedService) {
    this.id = +this.activeRouter.snapshot.paramMap.get('id');
    this.facturaService.getFacturasByHuesped(this.id).subscribe(
      data => {this.facturas = data; console.log(this.facturas); }
    );

    this.huespedService.getHuespedesById(this.id).subscribe(
      data => this.huespedes = data
    );
  }

  ngOnInit() {

  }

  verDetalle(id: number) {
    console.log(id);
    this.router.navigate(['/huespedes', this.id, 'factura', id]);
  }

  crearFactura() {
    this.router.navigate(['/huespedes', this.id, 'factura']);
  }

}
