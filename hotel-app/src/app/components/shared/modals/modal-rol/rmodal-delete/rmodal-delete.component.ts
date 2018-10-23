import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Roles } from 'src/app/models/roles';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rmodal-delete',
  templateUrl: './rmodal-delete.component.html',
  styleUrls: ['./rmodal-delete.component.css']
})
export class RmodalDeleteComponent {
  @Input() rol: Roles;
  @Output() deleteRol = new EventEmitter<Roles>();
  closeResult: string;

  constructor( public activeModal: NgbActiveModal) {}

  delete() {
    this.deleteRol.emit(this.rol);
    this.activeModal.close("Save Click");
  }


}
