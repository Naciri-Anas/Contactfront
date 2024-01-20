import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact-service.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
  contact!: any[];
  selectedContact: any;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContact();
  }

  loadContact() {
    this.contactService.getContactList()
      .subscribe(
        response => {
          this.contact = response;
        },
        error => {
          console.error(error);
        }
      );
  }

  editContact(contact: any) {
    this.selectedContact = { ...contact };
  }

  updateContact() {
    console.log('Contact before updating:', this.selectedContact);
  
    this.contactService.updateContact(this.selectedContact.id, this.selectedContact)
      .subscribe(
        response => {
          console.log('Update response:', response);
          this.selectedContact = null;
          this.loadContact();
        },
        error => {
          console.error('Update error:', error);
        }
      );
  }
  
  

  

  deleteContact(contactId: number) {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(contactId)
        .subscribe(
          response => {
            console.log(response);
            this.loadContact();
          },
          error => {
            console.error(error);
          }
        );
    }
  }
}
