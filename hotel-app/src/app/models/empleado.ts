
export interface TipoEmpleado {
  tipoEmpleadoID: number;
  nombreTipoEmpleado: string;
  permisos: string;
}

export interface Empleados {
  idUsuario: number;
  nombreUsuario: string;
  apellidoUsuario: string;
  direccionUsuario: string;
  telefonoUsuario: string;
  emailUsuario: string;
  tipoEmpleado: TipoEmpleado;
}
