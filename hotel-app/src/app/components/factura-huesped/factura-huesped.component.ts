import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/models/producto';
import { Item } from 'src/app/models/item';
import { FacturaService } from 'src/app/services/factura.service';
import { Factura } from 'src/app/models/factura';

@Component({
  selector: 'app-factura-huesped',
  templateUrl: './factura-huesped.component.html',
  styleUrls: ['./factura-huesped.component.css']
})
export class FacturaHuespedComponent implements OnInit {
  termino: string;
  productos: Producto[];
  items: Item[] = [];
  ID: number = 1;
  total: number = 0;
  idHuesped: number;
  constructor(private activeRouter: ActivatedRoute, private router: Router,
    private productoService: ProductosService, private facturaService: FacturaService) { }

  ngOnInit() {
    this.idHuesped = +this.activeRouter.snapshot.paramMap.get('id');
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
    this.productoService.getProductos().subscribe(
      data => this.productos = data
    );
  }

  searchProducto = (text$: Observable<String>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term =>  term.length < 2 ? [] : this.productos.filter(v => v.producto.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  formatter = (x: {producto: string, costo: string}) => `${x.producto} ${x.costo}`;

  selectedItem($event, input) {
    $event.preventDefault();
    this.items.push({
      "idItem": this.ID,
      "precio": $event.item.costo,
      "nombre": $event.item.producto,
      "cantidad": 1,
      "total": $event.item.costo,
      "idProducto": $event.item.idProducto
    });
    input.value = '';

    this.ID = this.ID + 1;
    this.total += $event.item.costo;
  }

  change($event, id) {
    const cantidad = $event.target.value;
    this.items.forEach(element => {
      if (element.idItem === id) {
        element.total = element.precio * cantidad;
      }
    });
    this.update();
  }

  delete(id) {
    this.items = this.items.filter(item => item.idItem !== id);
    this.update();
  }

  update() {
    this.total = 0;
    this.items.forEach(elements => {
      this.total += elements.total;
    });
  }

  onSubmit() {
    const factura = {} as Factura;
    factura.items = this.items;
    factura.total = this.total;
    console.log(factura.items);
    this.facturaService.saveFacturaByHuesped(this.idHuesped, factura).subscribe(
      () => {
        this.router.navigate(['/huespedes', this.idHuesped]);
      }
    );
  }

  back() {
    this.router.navigate(['/huespedes', this.idHuesped]);
  }
}
