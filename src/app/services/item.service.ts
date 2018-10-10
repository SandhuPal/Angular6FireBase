import { Injectable } from "@angular/core";
//import { AngularFireDatabase, AngularFireList } from "@angular/fire/database"; //Realtime list
import { map } from "rxjs/operators"; //realtime map

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore"; //Cloud Collection

import { Observable } from "rxjs";

import { Item } from "./../models/Item";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  // Cloud collection code
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public db: AngularFirestore) {
    //this.items = db.collection("items").valueChanges();

    this.itemsCollection = this.db.collection("items", ref =>
      ref.orderBy("title", "asc")
    );

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemDoc = this.db.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item) {
    this.itemDoc = this.db.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
