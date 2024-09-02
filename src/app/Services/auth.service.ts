import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string ="https://b583-116-90-98-6.ngrok-free.app/api/User/"
  constructor(private http: HttpClient) { }

SignUp(userObj :any): Observable<any>{
  return this.http.post<any>(`${this.baseUrl}register` ,userObj)
}
Login(LoginObj :any): Observable<any>{
  return this.http.post<any>(`${this.baseUrl}authenticate` ,LoginObj)
}

}
