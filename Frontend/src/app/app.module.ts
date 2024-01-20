import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactUpdateComponent } from './components/contact-update/contact-update.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactService } from './services/contact-service.service';

// Import the MatIconModule
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactCreateComponent,
    ContactListComponent,
    ContactUpdateComponent,
    NavComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule, // Include MatIconModule here
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
