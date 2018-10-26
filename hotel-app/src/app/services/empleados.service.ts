import { Empleados } from './../models/empleado';
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
  private endPointEmployee: string = `${this.urlEndPoint}usuarios`;
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private _httpClient: HttpClient) {}


  saveEmployee(empl: Empleados): Observable<Empleados> {
    return this._httpClient.post<Empleados>(`${this.endPointEmployee}`, empl, { headers: this.httpHeader });
  }

  editEmployee(empl: Empleados): Observable<Empleados> {
    return this._httpClient.put<Empleados>(`${this.endPointEmployee}/${empl.idUsuario}`, empl, { headers: this.httpHeader });
  }

  deleteEmployee(emplId: number): Observable<Empleados> {
    return this._httpClient.delete<Empleados>(`${this.endPointEmployee}/${emplId}`, {headers: this.httpHeader});
  }

  getEmployees(): Observable<Empleados[]> {
    return this._httpClient.get<Empleados[]>(this.endPointEmployee);
  }

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
