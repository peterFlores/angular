import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Empleados } from 'src/app/models/empleado';

@Component({
  selector: 'app-emodal-delete',
  templateUrl: './emodal-delete.component.html',
  styles: []
})
export class EmodalDeleteComponent {

  @Input() employee: Empleados;

  @Output() delete = new EventEmitter<Empleados>();

  constructor( public activeModal: NgbActiveModal) {}

  deleteEmployee() {
    this.delete.emit(this.employee);
    this.activeModal.close("Save Click");
  }

}
