import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassportAppServiceService } from '../passport-app-service.service';

@Component({
  selector: 'newregistration',
  templateUrl: './newregistration.component.html',
  styleUrls: ['./newregistration.component.css']
})
 
export class NewregistrationComponent implements OnInit {
  @Input()
  customerDetails = { 
    cid:0,
    firstName:'',
    lastName: '',
    fatherFirstName: '',
    fatherLastName: '',
    gender: 'F',
    email: '',
    phoneNo: 0,
    aadharNo: 0,
    address: '' };
  constructor(public restApi: PassportAppServiceService, public router: Router) { }

  ngOnInit(): void {}

  addCustomer() {
    window.alert("Are you sure!!");
    this.restApi.createEmployee( this.customerDetails).subscribe((data: {}) => {
      this.router.navigate(['/info']);
    });
  }


}
