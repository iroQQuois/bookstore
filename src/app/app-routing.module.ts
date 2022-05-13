import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookEditComponent} from "./book-edit/book-edit.component";

const routes: Routes = [
  { path: '*', component: AppComponent },
  { path: 'books', component: BookListComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'book/:id/edit', component: BookEditComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
