import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  add() {
    this.modalService.addCategory();
  }
}
