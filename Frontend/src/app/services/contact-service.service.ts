import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  createContact(contact: any): Observable<any>  {
    const url = `${this.apiUrl}/add`;
    return this.http.post<any>(url, contact);
  }

  updateContact(contactId: number, contact: any): Observable<any> {
    const url = `${this.apiUrl}/update/${contactId}`;
    return this.http.put<any>(url, contact);
  }

  getContactList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteContact(contactId: number): Observable<any> {
    const url = `${this.apiUrl}/remove/${contactId}`;
    return this.http.delete<any>(url);
  }
}
