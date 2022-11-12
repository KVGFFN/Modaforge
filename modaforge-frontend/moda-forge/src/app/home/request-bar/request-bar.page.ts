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

  // foutmelding op html pagina
  isApiAvailable: boolean;

  async getAllUsers() {
    try
    {
      const response = await fetch('https://localhost:7271/api/Request', {method: 'GET'});
      const data = await response.json();
      this.requests = data;
      console.log(this.requests);
      this.isApiAvailable = true;
    }
    catch (error)
    {
      console.log("--- ERROR AT getAllUsers() ---");
      console.log(error);
      this.isApiAvailable = false;
    }
  }


  constructor() { }

  ngOnInit() {
    this.isApiAvailable = true;
    this.getAllUsers();
  }

  


}
