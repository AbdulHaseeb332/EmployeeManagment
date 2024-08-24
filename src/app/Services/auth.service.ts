import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ="https://localhost:7107/api/User/"
  constructor(private http: HttpClient) { }

SignUp(userObj :any): Observable<any>{
  return this.http.post<any>(`${this.baseUrl}register` ,userObj)
}
Login(LoginObj :any): Observable<any>{
  return this.http.post<any>(`${this.baseUrl}authenticate` ,LoginObj)
}

}
