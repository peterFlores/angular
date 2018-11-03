import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Factura } from "../models/factura";

@Injectable({
  providedIn: "root"
})
export class FacturaService {
  private urlEndPoint: string = environment.apiUrl;
  private endPoint: string = `${this.urlEndPoint}factura`;

  private httpHeader = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private _httpClient: HttpClient) {}

  getFacturasByHuesped(id: number): Observable<Factura[]> {
    console.log(id);
    return this._httpClient.get<Factura[]>(`${this.endPoint}/${id}`);
  }

  saveFacturaByHuesped(id: number, factura: Factura): Observable<Factura> {
    console.log(factura);
    return this._httpClient.post<Factura>(`${this.endPoint}/${id}`, factura, { headers: this.httpHeader });
  }
}
