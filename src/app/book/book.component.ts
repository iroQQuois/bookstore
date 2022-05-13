import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id: number | undefined;
  book: {
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
} = {
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
};
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute){
    this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
  }
  ngOnInit(): void {
    console.log('компонент был вызван')
    this.getBook()
  }

  getBook() {
    fetch("http://localhost:8080/api/book/" + this.id,
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
        this.book = data
      });
  }

}
