import { Component, OnInit } from '@angular/core';
import { Huespedes } from 'src/app/models/huesped';
import { HuespedService } from 'src/app/services/huesped.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HModalSaveComponent } from '../shared/modals/modal-huesped/form/save/h-modal-save.component';

@Component({
  selector: 'app-huespedes',
  templateUrl: './huespedes.component.html',
  styleUrls: ['./huespedes.component.css']
})
export class HuespedesComponent implements OnInit {

  huespedes: Huespedes[];
  constructor(private huespedService: HuespedService, private modalService: NgbModal) { }

  ngOnInit() {
    this.huespedService.getHuespedes().subscribe(
      data => this.huespedes = data
    );
  }

  save() {
    const modalRef = this.modalService.open(HModalSaveComponent);
  }





}
