import { Component, OnInit, Input } from '@angular/core';
import { Home } from './home';

@Component({
  selector: 'app-home-tarjeta',
  templateUrl: './home-tarjeta.component.html',
  styleUrls: ['./home-tarjeta.component.css']
})
export class HomeTarjetaComponent implements OnInit {

  @Input() tarjeta: Home;
  constructor() { }

  ngOnInit() {
  }

}
