import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../services/heroes.service';
import { Heroes } from '../models/heroes';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: Heroes;
  constructor(private activatedRouter: ActivatedRoute,
                  private heroeService: HeroesService) {

    this.activatedRouter.params.subscribe( (params) => {
        this.heroe = this.heroeService.getHeroe(params.id);
    });
  }

  ngOnInit() {

  }

}
