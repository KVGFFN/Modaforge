import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getAllUsers()
  }

  async getAllUsers() {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    console.log(data);
  }

}
