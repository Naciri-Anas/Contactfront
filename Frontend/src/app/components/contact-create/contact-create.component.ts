import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router
import { ContactService } from '../../services/contact-service.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent {
  contact = {
    name: '',
    address: '',
    mobileNumber: ''
  };

  // Inject the Router in the constructor
  constructor(private service: ContactService, private router: Router) {}

  create() {
    this.service.createContact(this.contact)
      .subscribe(
        response => {
          console.log(response);
          
          // Use the router service to navigate
          this.router.navigate(['/contact-list']);
        },
        error => {
          console.log(error);
          alert('Failed to create a new contact');
        });
  }
}
