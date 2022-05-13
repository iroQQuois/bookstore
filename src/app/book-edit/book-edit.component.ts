import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  placeholderBook: {
      "label": String,
      "genre": String,
      "dateOfWriting": String,
      "description": String,
      "image": String
    } = {
    "label": "",
    "genre": "",
    "dateOfWriting": "",
    "description": "",
    "image": ""
  };
  book: {
    "label": String,
    "genre": String,
    "dateOfWriting": String,
    "description": String,
    "image": String
  } = {
    "label": "",
    "genre": "",
    "dateOfWriting": "",
    "description": "",
    "image": ""
  };

  done: boolean = false;
  private querySubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute){
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.placeholderBook.label = queryParam['label'];
        this.placeholderBook.genre = queryParam['genre'];
        this.placeholderBook.dateOfWriting = queryParam['dateOfWriting'];
        this.placeholderBook.description = queryParam['description'];
        this.placeholderBook.image = queryParam['image'];
      }
    );
  }

  ngOnInit(): void {
  }

  getBookId(): Number {
    let id: string = this.router.url.replace("/edit", "");

    return Number(id.charAt(id.length - 1));
  }

  submit(book: any) {
    fetch("http://localhost:8080/api/book/" + this.getBookId(),
      {
        method: "PUT",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        if (response.status == 200) {
          this.done = true
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
}
