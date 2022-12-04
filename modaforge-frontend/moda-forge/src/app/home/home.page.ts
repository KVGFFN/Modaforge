import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FirebaseApp, initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  users = [];
  


  constructor(private userService: UserService) 
  {
    this.users = [];
  }

  ngOnInit() {
    this.getAllUsers()

  }

  

  // async getAllUsers() {
  //   const response = await fetch('https://localhost:7271/api/User', {method: 'GET'});
  //   const data = await response.json();
  //   console.log(data);
  //   this.users = data;
  // }

  async getAllUsers() {
    this.userService.getAllUsers().subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }


  

}
