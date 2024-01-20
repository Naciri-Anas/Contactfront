import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contact: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.http.get<any[]>('http://localhost:8080/api/contact')
      .subscribe(
        response => {
          this.contact = response; // Update the customers array
        },
        error => {
          console.log(error); // Handle error response
        }
      );
  }
}
