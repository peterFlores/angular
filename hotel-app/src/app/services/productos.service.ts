import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

private urlEndPoint: string = environment.apiUrl;
  private endPoint: String = 'productos';

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _httpClient: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this._httpClient.get<Producto[]>(`${this.urlEndPoint}${this.endPoint}`);
  }

  updateProducto(producto: Producto): Observable<Producto> {
    return this._httpClient.put<Producto>(`${this.urlEndPoint}${this.endPoint}/${producto.idProducto}`,
    producto, {headers: this.httpHeader});
  }
  deleteProductoByID (productoId: number): Observable<Producto> {
    return this._httpClient.delete<Producto>(`${this.urlEndPoint}${this.endPoint}/${productoId}`, {headers: this.httpHeader});
  }

  saveProducto(producto: Producto): Observable<Producto> {
    return this._httpClient.post<Producto>(`${this.urlEndPoint}${this.endPoint}`, producto, {headers: this.httpHeader});
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
