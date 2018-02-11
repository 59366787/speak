import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Category, CategoryInfo } from '../../models/category';
import { FirebaseService } from '../../services/firebase-service.service';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAction } from 'angularfire2/database/interfaces';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryList: AngularFireList<Category>;
  categoryInfo: CategoryInfo[];

  constructor(private modalService: ModalService, private firebaseService: FirebaseService, private db: AngularFireDatabase) {
    this.categoryList = db.list('category');
  }

  ngOnInit() {
    this.categoryList.snapshotChanges().map(actions => {

      return actions.map(action => ({ key: action.key, value: action.payload.val() }));

    }).subscribe(items => {

      this.categoryInfo = items;

    });
  }

  add() {
    this.modalService.category().result.then((response: Category) => {
      this.firebaseService.saveCategory(response);
    }, () => { });

  }
  edit(data: CategoryInfo) {
    this.modalService.category(data).result.then((response: Category) => {
      this.firebaseService.updateCategory(data.key, response);
    }, () => { });
  }
  delete(data: CategoryInfo) {
    this.firebaseService.deleteCategory(data.key);
  }
}
