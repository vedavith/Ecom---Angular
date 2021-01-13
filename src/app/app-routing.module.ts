import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Routing Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent},
  { path: 'Contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
