import { Injectable } from '@angular/core';
import { IP } from 'src/helpers/IP';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/modules/interfaces/user.interface';
import { catchError, filter, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  

  constructor(
    private http: HttpClient
  ) { }

  API = IP.local;

  // Get all users
  getAllUsers() {
    return this.http.get<User[]>(`${this.API}/api/User`);
  }

  errormsg: string;
  // Add user
  addUser(user: User): Observable<User> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post<User>(`${this.API}/api/User`, body, { 'headers': headers });
  }

  // Get specific user
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.API}/api/User/${id}`);
  }

  getUserByNameEmail(name: string, email: string): Observable<User> {
    return this.http.get<User>(`${this.API}/api/User/${name}/${email}`);
  }

  // Update user
  updateUser(user: User, id: number): Observable<User> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.http.put<User>(`${this.API}/api/User/${id}`, body, { 'headers': headers });
  }

  /* Get all users where providerRole is true
  getAllProviders(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API}/api/User`).pipe(
      filter(user => user.providerRole === true)
    );
  }*/


}
