import { EmpleadosService } from './../../services/empleados.service';
import { Roles } from 'src/app/models/roles';
import { Empleados } from './../../models/empleado';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmodalSaveComponent } from '../shared/modals/modal-empleado/emodal-save/emodal-save.component';
import { EmodalDeleteComponent } from '../shared/modals/modal-empleado/emodal-delete/emodal-delete.component';
import { EmodalUpdateComponent } from '../shared/modals/modal-empleado/emodal-update/emodal-update.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: Empleados[];
  roles: Roles[];
  constructor(private employeeService: EmpleadosService, private modalService: NgbModal) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data) => this.empleados = data);
    this.employeeService.getRoles().subscribe((data) => this.roles = data);
  }

  save() {
    const modalRef = this.modalSetting(EmodalSaveComponent);
    modalRef.componentInstance.roles = this.roles;
    modalRef.componentInstance.agregarEmpleado.subscribe((emmitedValue) => {
      this.saveEmployee(emmitedValue);
    });
  }

  delete(employeeSelected: Empleados) {
    const modalRef = this.modalSetting(EmodalDeleteComponent);
    modalRef.componentInstance.employee = employeeSelected;
    modalRef.componentInstance.delete.subscribe((emmitedValue) => {
      this.deleteEmployee(emmitedValue);
    });
  }

  edit (employeeSelected: Empleados) {
    const modalRef = this.modalSetting(EmodalUpdateComponent);
    modalRef.componentInstance.employee = employeeSelected;
    modalRef.componentInstance.roles = this.roles;
    modalRef.componentInstance.editarEmpleado.subscribe((emmitedValue) => {
      this.editEmployee(emmitedValue);
    });
  }



  editEmployee(employee: Empleados) {
    this.employeeService.editEmployee(employee).subscribe(() => this.ngOnInit());
  }

  saveEmployee(employee: Empleados) {
    this.employeeService.saveEmployee(employee).subscribe(() => this.ngOnInit());
  }

  deleteEmployee(employee: Empleados) {
    this.employeeService.deleteEmployee(employee.idUsuario).subscribe(() => {
      this.empleados = this.empleados.filter(tf => tf !== employee);
    });
  }

  modalSetting(modal: any) {
    return this.modalService.open(modal);
  }


}
