import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class PassportAppServiceService {
  private resturl: string = 'http://localhost:8080/passport/customer';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  getCustomer(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.resturl + '/allcust')
      .pipe(retry(1), catchError(this.handleError));
  }

  getACustomer(cid: any): Observable<Customer> {
    return this.http
      .get<Customer>(this.resturl + '/getCust/' + cid)
      .pipe(retry(1), catchError(this.handleError));
  }

  createEmployee(customer: {
    cid: number;
    firstName: string;
    lastName: string;
    fatherFirstName: string;
    fatherLastName: string;
    gender: string;
    email: string;
    phoneNo: number;
    aadharNo: number;
    address: string;
  }): Observable<Customer> {
    return this.http
      .post<Customer>(
        this.resturl + '/createCust',
        JSON.stringify(customer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateCustomer(customer: any): Observable<Customer> {
    return this.http
      .put<Customer>(
        this.resturl + '/updateCust',
        JSON.stringify(customer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteCustomer(cid: any): Observable<Customer> {
    return this.http.delete<Customer>(this.resturl + '/deletecust/' + cid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  
  handleError(err: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error code : ${err.status} \n Error Message : ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
