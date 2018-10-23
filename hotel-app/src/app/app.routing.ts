import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HuespedesComponent } from './components/huespedes/huespedes.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { RolesComponent } from './components/roles/roles.component';

const ROUTES: Routes = [
  {  path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'huespedes', component: HuespedesComponent },
  { path: 'reservaciones', component: ReservacionesComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'roles', component: RolesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
