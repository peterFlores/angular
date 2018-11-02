import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Huespedes } from 'src/app/models/huesped';
import { RoomService } from 'src/app/services/room.service';
import { HuespedService } from 'src/app/services/huesped.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Room } from 'src/app/models/room';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/internal/operators';
import { formatDate } from '@angular/common';
import { Reservacion } from 'src/app/models/reservacion';

@Component({
  selector: 'app-re-modal-save',
  templateUrl: './re-modal-save.component.html',
  styleUrls: ['./re-modal-save.component.css']
})
export class ReModalSaveComponent implements OnInit {

  @Output() agregarReservacion = new EventEmitter<Reservacion>();
  fromDate: string;
  toDate: string;
  huesped: Huespedes[];
  room: Room[];

  formulario: FormGroup;

  isValidFormSubmitted = null;

  constructor(public activeModal: NgbActiveModal, private huespedService: HuespedService,
    private roomService: RoomService) {
      this.formulario = new FormGroup({
        idHuesped: new FormControl(null),
        idRoom: new FormControl(null),
        idFactura: new FormControl(null),
        huesped: new FormControl(null, Validators.required),
        room: new FormControl(null, Validators.required),
        factura: new FormControl(),
      });
  }


  ngOnInit() {
    this.huespedService.getHuespedes().subscribe( data => this.huesped = data);
    this.roomService.getRoomsAvailable().subscribe( data => this.room = data );

  }

  onFormSubmit() {
    this.isValidFormSubmitted = false;
     if (this.formulario.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this._room.value.checkIn = this.fromDate;
     this._room.value.checkOut = this.toDate;
     console.log(this.formulario.value);
    this.agregarReservacion.emit(this.formulario.value);
     this.activeModal.close("Save Click");
     this.formulario.reset();
  }

  setFrom(date: any) {
    this.fromDate  = formatDate(date, 'yyyy-MM-dd', 'en-US');
  }
  setTo(date: any) {
    this.toDate = formatDate(date, 'yyyy-MM-dd', 'en-US');
  }

  searchHuesped = (text$: Observable<String>) => text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? [] : this.huesped.filter(v => v.dpi.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchRoom = (text$: Observable<String>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term =>  term.length < 2 ? [] : this.room.filter(v => v.room.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  formatter = (x: {nombre: string, apellido: string}) => `${x.nombre} ${x.apellido}`;

  formatterRoom = (x: {room: string}) => `${x.room}`;

  get _huesped() {
    return this.formulario.get('huesped');
  }

  get _room() {
    return this.formulario.get('room');
  }
}
