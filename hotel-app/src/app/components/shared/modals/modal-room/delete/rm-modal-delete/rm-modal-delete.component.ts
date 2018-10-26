
import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Room } from 'src/app/models/room';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rm-modal-delete',
  templateUrl: './rm-modal-delete.component.html',
  styles: []
})
export class RmModalDeleteComponent  {
  @Input() room: Room;

  @Output() deleteRoom = new EventEmitter<Room>();

  constructor( public activeModal: NgbActiveModal) {}

  delete() {
    this.deleteRoom.emit(this.room);
    this.activeModal.close("Save Click");
  }

}
