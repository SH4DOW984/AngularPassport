import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component'
import { CustomereditComponent } from './customeredit/customeredit.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { NewregistrationComponent } from './newregistration/newregistration.component';
 
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  
  { path: 'newregistration' ,component:NewregistrationComponent},
  { path: 'customerlist' ,component: CustomerlistComponent},
  { path: 'customeredit/:cid' ,component: CustomereditComponent},
  { path: 'login' ,component: LoginComponent},
  { path: 'register' ,component: RegisterComponent},
  { path: 'info' ,component:  InfoComponent},
 
 

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
  AboutusComponent,
  HomeComponent,
  ContactusComponent,
  LoginComponent,
  CustomerlistComponent,
  CustomereditComponent,
  NewregistrationComponent
];