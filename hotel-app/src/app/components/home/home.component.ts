import { Home } from './home-tarjeta/home';
import { HomeTarjetaService } from './../../services/home-tarjeta.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tarjetas: Home[] = [];
  constructor(private homeService: HomeTarjetaService) { }

  ngOnInit() {
    this.tarjetas = this.homeService.getTarjetas();
  }

}
