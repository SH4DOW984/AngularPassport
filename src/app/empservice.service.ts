import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError} from 'rxjs';
import { catchError,retry, } from 'rxjs/operators';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmpserviceService {
  [x: string]: any;
  private url: string = 'assets/mydata/employeesss.json';

  constructor(private http: HttpClient) {}

  getEmployeeFromService():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url).pipe(retry(1), catchError(this.handleError));
    
  }
  handleError(err:any)
  { let errorMessage="";
  if(err.error instanceof ErrorEvent){
    errorMessage=err.error.message;

  }else {
    errorMessage=`Error code : ${err.status} \n Error Message :${err.message}`;
  }
  window.alert(errorMessage)
  return throwError(errorMessage);
  

  }
}