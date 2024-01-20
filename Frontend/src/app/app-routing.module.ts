import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from './components/contact-create/contact-create.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactUpdateComponent } from './components/contact-update/contact-update.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'contact-create', component: ContactCreateComponent },
  { path: 'contact-list', component:ContactListComponent},
  { path: 'contact-update', component: ContactUpdateComponent },
  {path:'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
