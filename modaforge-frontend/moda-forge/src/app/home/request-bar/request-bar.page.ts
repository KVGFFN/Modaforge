import { Component, OnInit } from '@angular/core';
import { Request } from 'src/modules/interfaces/request.interface';

@Component({
  selector: 'app-request-bar',
  templateUrl: './request-bar.page.html',
  styleUrls: ['./request-bar.page.scss'],
})
export class RequestBarPage implements OnInit {

  requests: Request[];

  id: number;
  title: string;
  description: string;

  // foutmelding op html pagina
  isApiAvailable: boolean;

  async getAllRequests() {
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
    this.getAllRequests();
  }

  


}
