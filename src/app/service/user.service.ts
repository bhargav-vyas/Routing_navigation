import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:8080/user/register-user";

  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user, { responseType: 'text' });
  }
}
