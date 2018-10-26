export interface Huesped {
  idHuesped?: any;
  nombre: string;
  apellido: string;
  direccion?: any;
  edad?: any;
  genero?: any;
  telefono?: any;
  dpi?: any;
}

export interface Room {
  idRoom?: any;
  room: string;
  checkIn: string;
  checkOut: string;
  status?: any;
  tarifa?: any;
}

export interface Factura {
  idFactura?: any;
  serie?: any;
  numfact?: any;
}

export interface Reservacion {
  idHuesped?: any;
  idRoom?: any;
  idFactura?: any;
  huesped: Huesped;
  room: Room;
  factura: Factura;
}
