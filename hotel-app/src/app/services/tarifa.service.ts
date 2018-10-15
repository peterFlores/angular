import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  } from 'rxjs';
import { Tarifa } from '../models/tarifa';
import { map, catchError } from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class TarifaService {

  private urlEndPoint: string = environment.apiUrl;
  private endPoint: String = 'tarifas';

  private httpHeader = new HttpHeaders({'Content-Type': 'application/jspn'});

  constructor(private _httpClient: HttpClient) {}

  getTarifas(): Observable<Tarifa[]> {
    return this._httpClient.get<Tarifa[]>(`${this.urlEndPoint}${this.endPoint}`);
  }

  deleteTarifaById (tarifaId: number): Observable<Tarifa> {
    return this._httpClient.delete<Tarifa>(`${this.urlEndPoint}${this.endPoint}/${tarifaId}`, {headers: this.httpHeader});
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
