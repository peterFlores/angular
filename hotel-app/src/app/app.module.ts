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
import { ModalFormTarifaComponent } from './components/shared/modals/modal-tarifa/form/modal-form.component';


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
      ModalFormTarifaComponent
   ],
   entryComponents: [
     ModalTarifaComponent,
     ModalFormTarifaComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      APP_ROUTING,
      NgbModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
