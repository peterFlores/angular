import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/productos.service';
import { PmodalSaveComponent } from '../shared/modal-producto/pmodal-save/pmodal-save.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[];
  constructor(private productoService: ProductosService, private modalService: NgbModal) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      data => this.productos = data
    );
  }

  save() {
    const modalRef = this.modalSetting(PmodalSaveComponent);
    modalRef.componentInstance.agregar.subscribe((emmitedValue) => {
      this.saveProducto(emmitedValue);
    });
  }

  saveProducto(producto: Producto) {
    this.productoService.saveProducto(producto).subscribe(() => this.ngOnInit());
  }
  modalSetting(modal: any) {
    return this.modalService.open(modal);
  }
}
