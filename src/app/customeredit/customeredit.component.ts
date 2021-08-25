import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
import { PassportAppServiceService } from '../passport-app-service.service';

@Component({
  selector: 'customeredit',
  templateUrl: './customeredit.component.html',
  styleUrls: ['./customeredit.component.css']
})
export class CustomereditComponent implements OnInit {
  customerData: any = {};
  cid = this.aroute.snapshot.params['cid'];
  
  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi:  PassportAppServiceService
  ) { }

  ngOnInit(): void {
    this.restApi
      .getACustomer(this.cid)
      .subscribe((data) => (this.customerData= data));
  }

  updateCustomer() {
    if (window.confirm('Are you sure ?')) {
       
      this.restApi.updateCustomer(this.customerData).subscribe((data: {}) => {
        this.router.navigate(['/customerlist']);
      });
    }
  }

}
