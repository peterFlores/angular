import { environment } from 'src/environments/environment';
import { Reservacion } from 'src/app/models/reservacion';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ReservacionService {
  private urlEndPoint: string = environment.apiUrl;
  private endPoint: string = `${this.urlEndPoint}reservaciones`;

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _httpClient: HttpClient) {}

  getReservaciones(): Observable<Reservacion[]> {
    return this._httpClient.get<Reservacion[]>(this.endPoint);
  }

  getReservacionesByHuesped(id: number): Observable<Reservacion[]> {
    return this._httpClient.get<Reservacion[]>(`${this.endPoint}/${id}`);
  }

  saveReservacion(reservacion: Reservacion): Observable<Reservacion> {
    return this._httpClient.post<Reservacion>(`${this.endPoint}`, reservacion, { headers: this.httpHeader});
  }
}
