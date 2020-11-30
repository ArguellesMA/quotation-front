import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseApi } from '../../models/common/responseapi';
import { UserApi } from '../../models/users/usersapi';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class UsersService {


  
  // Define API
 // apiURL = 'https://kubeet-cfdi-api.appspot.com';
 apiURL = 'http://35.223.237.178:8080';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
    
  // HttpClient API post() method => Create employee
  postUsers(userApi): Observable<UserApi> {
    return this.http.post<UserApi>(this.apiURL + '/api/auth/signin', JSON.stringify(userApi), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}