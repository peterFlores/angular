import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Roles } from '../models/roles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private urlEndPoint: string = environment.apiUrl;
  private endPointTipo: string = `${this.urlEndPoint}tipo_empleado`;
  private endPointEmployee: String = `${this.urlEndPoint}tipo_empleado`;
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _httpClient: HttpClient) {}

  saveRol(rol: Roles): Observable<Roles> {
    return this._httpClient.post<Roles>(`${this.endPointTipo}`, rol, {headers: this.httpHeader});
  }

  editRol(rol: Roles): Observable<Roles> {
    return this._httpClient.put<Roles>(`${this.endPointTipo}/${rol.tipoEmpleadoID}`, rol, {headers: this.httpHeader});
  }

  deleteRol(rolId: number): Observable<Roles> {
    return this._httpClient.delete<Roles>(`${this.endPointTipo}/${rolId}`, {headers: this.httpHeader});
  }

  getRoles(): Observable<Roles[]> {
    return this._httpClient.get<Roles[]>(this.endPointTipo);
  }
}
