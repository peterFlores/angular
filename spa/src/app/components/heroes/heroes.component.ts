import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Heroes } from '../models/heroes';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  termino: string;
  heroes: Heroes[] = [];
  constructor( private router: Router,
    private heroesService: HeroesService, private activeRouter: ActivatedRoute ) {
    this.heroes = this.heroesService.getHeroes();
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params) => {
        this.termino = params['termino'] || "";
        this.heroes = (this.termino !== "") ? this.heroesService.buscarHeroes(this.termino) : this.heroesService.getHeroes();
        }
    );
  }

}
