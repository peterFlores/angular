import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/roles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { RmodalSaveComponent } from '../shared/modals/modal-rol/rmodal-save/rmodal-save.component';
import { RmodalDeleteComponent } from '../shared/modals/modal-rol/rmodal-delete/rmodal-delete.component';
import { RmodalUpdateComponent } from '../shared/modals/modal-rol/rmodal-update/rmodal-update.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Roles[];
  constructor(private empleadoService: EmpleadosService, private modalService: NgbModal) { }


  ngOnInit() {
    this.empleadoService.getRoles().subscribe((data) => {
      this.roles = data;
      console.log(data);
    });
  }

  save() {
    const modalRef = this.modalSetting(RmodalSaveComponent);
    modalRef.componentInstance.agregarRol.subscribe((emmitedValue) => {
      this.saveRol(emmitedValue);
    });
  }

  delete(rolSelected: Roles) {
    const modalRef = this.modalSetting(RmodalDeleteComponent);
    modalRef.componentInstance.rol = rolSelected;
    modalRef.componentInstance.deleteRol.subscribe((emmitedValue) => {
      console.log("entro");
      this.deleteRol(emmitedValue);
    });
  }

  edit(rolSelected: Roles) {
    const modalRef = this.modalSetting(RmodalUpdateComponent);
    modalRef.componentInstance.rol = rolSelected;
    modalRef.componentInstance.editarRol.subscribe((emmitedValue) => {
      this.editRol(emmitedValue);
    });
  }



  editRol(rol: Roles) {
    this.empleadoService.editRol(rol).subscribe(() => this.ngOnInit());
  }

  saveRol(rol: Roles) {
    this.empleadoService.saveRol(rol).subscribe(() => this.ngOnInit());
  }

  deleteRol(rol: Roles) {
    this.empleadoService.deleteRol(rol.tipoEmpleadoID).subscribe(() => {
      this.roles = this.roles.filter(tf => tf !== rol);
    });
  }

  modalSetting(modal: any) {
    return this.modalService.open(modal);
  }

}
