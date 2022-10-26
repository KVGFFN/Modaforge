import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  users = [];

  constructor() { 
    this.users = [];
  }

  ngOnInit() {
    this.getAllUsers()
  }

  

  async getAllUsers() {
    const response = await fetch('https://localhost:7271/api/User', {method: 'GET'});
    const data = await response.json();
    console.log(data);
    this.users = data;
  }

}
