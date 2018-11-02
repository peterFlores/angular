import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura-huesped',
  templateUrl: './factura-huesped.component.html',
  styleUrls: ['./factura-huesped.component.css']
})
export class FacturaHuespedComponent implements OnInit {
  termino: string;
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params) => {
        this.termino = params['termino'] || "";
        if (this.termino !== "") {
          console.log("parametro", this.termino);
        }  else {
          console.log("vacio");
        }
      }
    );
  }

}
