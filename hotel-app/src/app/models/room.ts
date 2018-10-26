export interface Tarifa {
  idTarifa: number;
  tarifa: string;
  costo: number;
}

export interface Room {
  idRoom: number;
  room: string;
  checkIn?: any;
  checkOut?: any;
  status: string;
  tarifa: Tarifa;
}
