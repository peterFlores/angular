import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { Tarifa } from '../models/tarifa';
import { map, catchError } from 'rxjs/internal/operators';

@Injectable({
  providedIn: "root"
})
export class TarifaService {

  private urlEndPoint: string = 'http://localhost:8089/api/v1/tarifas';
  constructor(private _httpClient: HttpClient) {}

  getTarifas(): Observable<Tarifa[]> {
    return this._httpClient.get<Tarifa[]>(this.urlEndPoint);
  }

  deleteTarifaById (tarifaId: number): Observable<null> {
    return this._httpClient.delete(this.urlEndPoint + `/${tarifaId}`).pipe(
      map(response => null), catchError(this.handleError));
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
