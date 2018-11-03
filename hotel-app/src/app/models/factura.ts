export interface Item {
  idItem: number;
  precio: number;
  nombre: string;
  cantidad: number;
  total: number;
  idProducto: number;
}
export interface Factura {
  idFactura: number;
  serie: string;
  numfact: string;
  total: number;
  items: Item[];
}