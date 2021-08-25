import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { PassportofficesComponent } from './passportoffices/passportoffices.component';
import { NewregistrationComponent } from './newregistration/newregistration.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { FormsModule } from '@angular/forms';
import { CustomereditComponent } from './customeredit/customeredit.component';
import { CustomersearchComponent } from './customersearch/customersearch.component';
import { RegisterComponent } from './register/register.component';
import { InfoComponent } from './info/info.component';
 
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    PassportofficesComponent,
    NewregistrationComponent,
    CustomerlistComponent,
    CustomereditComponent,
    CustomersearchComponent,
    RegisterComponent,
    InfoComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}