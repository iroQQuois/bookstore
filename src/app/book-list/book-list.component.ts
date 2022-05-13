import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  constructor(private router: Router){}

  books: {
    "id": Number,
    "label": String,
    "genre": String,
    "authors": [{
      id: Number,
      firstName: String,
      lastName: String,
      birthDate: String
    }],
    "dateOfWriting": String,
    "description": String,
    "image": String
  }[] = [{
    "id": 1,
    "label": "asdawqrq",
    "genre": "hjgj",
    "authors": [
      {
        "id": 1,
        "firstName": "sdfs",
        "lastName": "sdfdsf",
        "birthDate": "2022-04-21T18:29:02"
      }
    ],
    "dateOfWriting": "2022-04-21T18:28:52",
    "description": "fhfgh",
    "image": "asda"
  }]

  getBooks() {
    fetch("http://localhost:8080/api/book/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.books = [...data]
      });
  }

  ngOnInit(): void {
    this.getBooks()
  }

  goToItem(book: any) {
    console.log(book)
    this.router.navigate(['/book', book.id]);
  }
}
