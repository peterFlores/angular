import { throttle } from 'rxjs/internal/operators';
import { NavbarService } from './../../../services/navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: Boolean = false;
  constructor( private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.change.subscribe( isActive => {
      this.loggedIn = isActive;
    });
  }

}
