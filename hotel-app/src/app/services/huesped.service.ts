import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Huespedes } from '../models/huesped';

@Injectable({
  providedIn: 'root'
})
export class HuespedService {


  private urlEndPoint: string = environment.apiUrl;
  private endPoint: string = `${environment}huespeds`;

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _httpClient: HttpClient) {}

  getHuespedes(): Observable<Huespedes[]> {
    return this._httpClient.get<Huespedes[]>(this.endPoint);
  }

  updateHuesped(huesped: Huespedes): Observable<Huespedes> {
    return this._httpClient.put<Huespedes>(`${this.endPoint}/${huesped.idHuesped}`, huesped, {headers: this.httpHeader});
  }
  deleteHuespedById (huespedId: number): Observable<Huespedes> {
    return this._httpClient.delete<Huespedes>(`${this.endPoint}/${huespedId}`, {headers: this.httpHeader});
  }

  saveHuesped(huesped: Huespedes): Observable<Huespedes> {
    return this._httpClient.post<Huespedes>(`${this.endPoint}`, huesped, {headers: this.httpHeader});
  }

}
