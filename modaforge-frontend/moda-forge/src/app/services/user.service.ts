import { Injectable } from '@angular/core';
import { IP } from 'src/helpers/IP';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/modules/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  API = IP.local;

  // Get all users
  getAllUsers()
  {
    return this.http.get<User[]>(`${this.API}/User`);
  }

  // Add user
  addUser(user: User)
  {
    return this.http.post<User[]>(`${this.API}/User`, {user});
  }

}
