import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarifa } from '../models/tarifa';

@Injectable({
  providedIn: "root"
})
export class TarifaService {

  private urlEndPoint: string = 'http://localhost:8089/api/v1/tarifas';
  constructor(private _httpClient: HttpClient) {}

  getTarifas(): Observable<Tarifa[]> {
    return this._httpClient.get<Tarifa[]>(this.urlEndPoint);
  }
}
