import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  @Output() change: EventEmitter<Boolean> = new EventEmitter();
  isActive = false;

  constructor() { }

  toggle() {
    this.isActive = !this.isActive;
    this.change.emit(this.isActive);
  }
}
