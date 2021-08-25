import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';
import { PassportAppServiceService } from '../passport-app-service.service';

@Component({
  selector: 'customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  status: string = "pending";
  isStatus: boolean = true;

  customer: any = [];
  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: PassportAppServiceService
  ) { }

  ngOnInit(): void {
    this.loadCustomer();
  }

  changestatus() {

    if (this.isStatus) {
      this.status = "done";

    }
    else {
      this.status = "pending";
    }
  }


  loadCustomer() {
    
    return this.restApi
      .getCustomer()
      .subscribe((data: any) => (this.customer = data));
  }
  deleteCustomer(id: any) {
    return this.restApi.deleteCustomer(id).subscribe((data) => {
      this.loadCustomer();
    });
  }

}
