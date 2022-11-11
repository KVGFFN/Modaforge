import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests = []
  constructor() {
    this.requests = [];
   }

  ngOnInit() {
    this.getAllRequests()
  }
  async getAllRequests(){ // it should be based on the user token so it doesn't actually get all TNs only the ones assing to user
    await fetch('https://localhost:7271/api/Request', {method: 'GET',headers: {'accessKey':'12345'}})
      .then(data => data.json())
      .then(data => {
        this.requests = data
      })
  }
}