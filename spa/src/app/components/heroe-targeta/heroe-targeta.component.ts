import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroes } from '../models/heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html'
})
export class HeroeTargetaComponent implements OnInit {

  @Input() heroe: Heroes;
  @Input() index: number;
  @Output() heroeSelected = new EventEmitter<number>();

  constructor(private router: Router) {
    this.heroeSelected = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe () {
    this.router.navigate(['/heroe', this.index]);
  }
}
