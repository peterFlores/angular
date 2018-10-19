import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { Tarifa } from '../models/tarifa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class TarifaService {

  private urlEndPoint: string = environment.apiUrl;
  private endPoint: String = 'tarifas';

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _httpClient: HttpClient) {}

  getTarifas(): Observable<Tarifa[]> {
    return this._httpClient.get<Tarifa[]>(`${this.urlEndPoint}${this.endPoint}`);
  }

  updateTarifa(tarifa: Tarifa): Observable<Tarifa> {
    return this._httpClient.put<Tarifa>(`${this.urlEndPoint}${this.endPoint}/${tarifa.idTarifa}`, tarifa, {headers: this.httpHeader});
  }
  deleteTarifaById (tarifaId: number): Observable<Tarifa> {
    return this._httpClient.delete<Tarifa>(`${this.urlEndPoint}${this.endPoint}/${tarifaId}`, {headers: this.httpHeader});
  }

  saveTarifa(tarifa: Tarifa): Observable<Tarifa> {
    return this._httpClient.post<Tarifa>(`${this.urlEndPoint}${this.endPoint}`, tarifa, {headers: this.httpHeader});
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
