import { Component, OnInit } from '@angular/core';
import IRequest from 'src/modules/interfaces/request.interface';

@Component({
  selector: 'app-request-bar',
  templateUrl: './request-bar.page.html',
  styleUrls: ['./request-bar.page.scss'],
})
export class RequestBarPage implements OnInit {

  requests: IRequest[];

  id: number;
  title: string;
  description: string;

  async getAllUsers() {
    const response = await fetch('https://localhost:7271/api/Request', {method: 'GET'});
    const data = await response.json();
    this.requests = data;
    console.log(this.requests);
  }


  constructor() { }

  ngOnInit() {
    this.getAllUsers();
  }

  


}
