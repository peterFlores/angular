import { Home } from './../components/home/home-tarjeta/home';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeTarjetaService {

  private tarjetas: Home[] = [
    {
      title: "Huespedes",
      description: "With supporting text below as a natural lead-in to additional content.",
      class: "block-1",
      route: "/huespedes"
    },
    {
      title: "Empleados",
      description: "With supporting text below as a natural lead-in to additional content.",
      class: "block-2",
      route: "/empleados"
    },
    {
      title: "Check IN/OUT",
      description: "With supporting text below as a natural lead-in to additional content.",
      class: "block-3",
      route: "/reservaciones"
    },
    {
      title: "Tarifas",
      description: "With supporting text below as a natural lead-in to additional content.",
      class: "block-4",
      route: "/tarifas"
    },
    {
      title: "Habitaciones",
      description: "With supporting text below as a natural lead-in to additional content.",
      class: "block-5",
      route: "/habitaciones"
    }
  ];

  constructor() {}

  getTarjetas() {
    return this.tarjetas;
  }
}
