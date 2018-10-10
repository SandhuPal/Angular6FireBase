import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import {
  ItemsComponent,
  DialogOverviewExampleDialog
} from "./components/items/items.component";

import { ItemService } from "./services/item.service";
import { AddItemComponent } from "./components/add-item/add-item.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatFormFieldModule
} from "@angular/material";

const routes = [
  {
    path: "",
    component: ItemsComponent,
    AddItemComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddItemComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase, "AngularFire22"),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
