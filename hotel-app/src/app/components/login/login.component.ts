import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private navbarService: NavbarService) { }

  ngOnInit() {
  }

  toHome () {
    this.navbarService.toggle();
    this.router.navigate(['/home']);
  }

}
