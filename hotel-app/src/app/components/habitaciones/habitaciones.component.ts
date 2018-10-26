import { RmModalUpdateComponent } from './../shared/modals/modal-room/update/rm-modal-update/rm-modal-update.component';
import { RmModalSaveComponent } from './../shared/modals/modal-room/save/rm-modal-save/rm-modal-save.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Room, Tarifa } from './../../models/room';
import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { TarifaService } from 'src/app/services/tarifa.service';
import { RmModalDeleteComponent } from '../shared/modals/modal-room/delete/rm-modal-delete/rm-modal-delete.component';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  rooms: Room[];
  tarifas: Tarifa[];
  constructor(private roomService: RoomService, private tarifaService: TarifaService, private modalService: NgbModal) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(
      (data) => {this.rooms = data;
        console.log(this.rooms); }
    );
    this.tarifaService.getTarifas().subscribe(
      data => this.tarifas = data
    );
  }

  save() {
    const modalRef = this.modalSetting(RmModalSaveComponent);
    modalRef.componentInstance.tarifas = this.tarifas;
    modalRef.componentInstance.agregarRoom.subscribe((emmitedValue) => {
      this.saveRoom(emmitedValue);
    });
  }

  delete(roomSelected: Room) {
    const modalRef = this.modalSetting(RmModalDeleteComponent);
    modalRef.componentInstance.room = roomSelected;
    modalRef.componentInstance.deleteRoom.subscribe((emmitedValue) => {
      this.deleteRoom(emmitedValue);
    });
  }

  edit (roomSelected: Room) {
    const modalRef = this.modalSetting(RmModalUpdateComponent);
    modalRef.componentInstance.room = roomSelected;
    modalRef.componentInstance.tarifas = this.tarifas;
    modalRef.componentInstance.editarRoom.subscribe((emmitedValue) => {
      this.editRoom(emmitedValue);
    });
  }



  editRoom(room: Room) {
    this.roomService.updateRoom(room).subscribe(() => this.ngOnInit());
  }

  saveRoom(room: Room) {
    this.roomService.saveRoom(room).subscribe(() => this.ngOnInit());
  }

  deleteRoom(room: Room) {
    this.roomService.deleteRoomById(room.idRoom).subscribe(() => {
      this.rooms = this.rooms.filter(tf => tf !== room);
    });
  }

  modalSetting(modal: any) {
    return this.modalService.open(modal);
  }

}
