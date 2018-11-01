import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routing';
import { HomeTarjetaComponent } from './components/home/home-tarjeta/home-tarjeta.component';
import { HuespedesComponent } from './components/huespedes/huespedes.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { ModalTarifaComponent } from './components/shared/modals/modal-tarifa/delete/modal-tarifa.component';
import { ModalFormTarifaComponent } from './components/shared/modals/modal-tarifa/form/update/modal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalSaveComponent } from './components/shared/modals/modal-tarifa/form/save/modal-save.component';
import { ModalDeleteComponent } from './components/shared/modals/modal-huesped/delete/modal-delete.component';
import { HModalSaveComponent } from './components/shared/modals/modal-huesped/form/save/h-modal-save.component';
import { HModalUpdateComponent } from './components/shared/modals/modal-huesped/form/update/h-modal-update.component';
import { RolesComponent } from './components/roles/roles.component';
import { RmodalDeleteComponent } from './components/shared/modals/modal-rol/rmodal-delete/rmodal-delete.component';
import { RmodalSaveComponent } from './components/shared/modals/modal-rol/rmodal-save/rmodal-save.component';
import { RmodalUpdateComponent } from './components/shared/modals/modal-rol/rmodal-update/rmodal-update.component';
import { EmodalDeleteComponent } from './components/shared/modals/modal-empleado/emodal-delete/emodal-delete.component';
import { EmodalSaveComponent } from './components/shared/modals/modal-empleado/emodal-save/emodal-save.component';
import { EmodalUpdateComponent } from './components/shared/modals/modal-empleado/emodal-update/emodal-update.component';
import { RmModalDeleteComponent } from './components/shared/modals/modal-room/delete/rm-modal-delete/rm-modal-delete.component';
import { RmModalSaveComponent } from './components/shared/modals/modal-room/save/rm-modal-save/rm-modal-save.component';
import { RmModalUpdateComponent } from './components/shared/modals/modal-room/update/rm-modal-update/rm-modal-update.component';
import { ReModalSaveComponent } from './components/shared/modals/modal-reservaciones/re-modal-save/re-modal-save.component';
import { DatePickerComponent } from './components/shared/date-picker/date-picker.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      NavbarComponent,
      HomeComponent,
      HomeTarjetaComponent,
      HuespedesComponent,
      HabitacionesComponent,
      TarifasComponent,
      EmpleadosComponent,
      ReservacionesComponent,
      ModalTarifaComponent,
      ModalFormTarifaComponent,
      ModalSaveComponent,

      // Huesped modals
      HModalSaveComponent,
      ModalDeleteComponent,
      HModalUpdateComponent,

      // Rol modals

      RolesComponent,
      RmodalDeleteComponent,
      RmodalSaveComponent,
      RmodalUpdateComponent,

      // Empleado modals
      EmodalDeleteComponent,
      EmodalSaveComponent,
      EmodalUpdateComponent,

      // Habitacion modals
      RmModalDeleteComponent,
      RmModalSaveComponent,
      RmModalUpdateComponent,

      // Reservaciones
      ReModalSaveComponent,

      DatePickerComponent
   ],
   entryComponents: [
     ModalTarifaComponent,
     ModalFormTarifaComponent,
     ModalSaveComponent,
     // HUESPEDES
     ModalDeleteComponent,
     HModalSaveComponent,
     HModalUpdateComponent,


      // Rol modals
      RmodalDeleteComponent,
      RmodalSaveComponent,
      RmodalUpdateComponent,

      // Empleado modals
      EmodalDeleteComponent,
      EmodalSaveComponent,
      EmodalUpdateComponent,

      // Habitacion modals
      RmModalDeleteComponent,
      RmModalSaveComponent,
      RmModalUpdateComponent,

      // Reservaciones
      ReModalSaveComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      APP_ROUTING,
      NgbModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
