import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { User } from '@app/shared/models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  url:string = environment.serverUrl + 'authenticate';

  // store the URL so we can redirect after logging in
  redirectUrl: string = "/deployment";
  headers: Headers;
  
  constructor(private http:HttpClient) {

  }

  login(user:User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions) ;
  }

}

