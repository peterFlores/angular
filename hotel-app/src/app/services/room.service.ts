import { Room } from './../models/room';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private urlEndPoint: string = environment.apiUrl;
  private endPoint: String = `${this.urlEndPoint}rooms`;

  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _httpClient: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this._httpClient.get<Room[]>(`${this.endPoint}`);
  }

  getRoomsAvailable(): Observable<Room[]> {
    return this._httpClient.get<Room[]>(`${this.endPoint}/availables`);
  }

  updateRoom(room: Room): Observable<Room> {
    return this._httpClient.put<Room>(`${this.endPoint}/${room.idRoom}`, room, {headers: this.httpHeader});
  }
  deleteRoomById (roomId: number): Observable<Room> {
    return this._httpClient.delete<Room>(`${this.endPoint}/${roomId}`, {headers: this.httpHeader});
  }

  saveRoom(room: Room): Observable<Room> {
    return this._httpClient.post<Room>(`${this.endPoint}/${room.tarifa.idTarifa}`, room, {headers: this.httpHeader});
  }

}
