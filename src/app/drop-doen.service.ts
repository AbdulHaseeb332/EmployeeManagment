// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Iuser } from './inter';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentSer {
//   private apiUrl = 'https://192.168.2.112:7035/api/Student';

//   constructor(private http: HttpClient) {}

//   getAllStudent(): Observable<Iuser[]> {
//     return this.http.get<Iuser[]>(this.apiUrl);
//   }

//   addUser(user: Iuser, type: string): Observable<any> {
//     if (type === 'Add') {
//       return this.http.post<any>(this.apiUrl, user);
//     } else {
//       return this.http.put<any>(`${this.apiUrl}/${user.Id}`, user);
//     }
//   }

//   GetByID(id: number): Observable<Iuser> {
//     return this.http.get<Iuser>(`${this.apiUrl}/${id}`);
//   }

//   updateUser(id: number, user: Iuser): Observable<any> {
//     return this.http.put<any>(`${this.apiUrl}/${id}`, user);
//   }

//   deleteUser(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.apiUrl}/${id}`);
//   }

//   // Uncomment if needed
//   // checkForDuplicates(user: { name: string; email: string }): Observable<boolean> {
//   //   return this.http.post<boolean>(`${this.apiUrl}/checkDuplicates`, user);
//   // }
// }
