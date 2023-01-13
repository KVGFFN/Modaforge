import { Component, OnInit } from '@angular/core';
import { Request } from 'src/modules/interfaces/tempinterfaces/request.interface';
import { RequestService } from 'src/app/tempservices/request.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { authState } from 'src/helpers/authState';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-request-bar',
  templateUrl: './request-bar.page.html',
  styleUrls: ['./request-bar.page.scss'],
})
export class RequestBarPage implements OnInit {

  requests: Request[];
  streamedData: any;

  id: number;
  title: string;
  description: string;

  // foutmelding op html pagina
  isApiAvailable: boolean;

  // async getAllRequests() {
  //   try
  //   {
  //     const response = await fetch('https://localhost:7271/api/Request', {method: 'GET'});
  //     const data = await response.json();
  //     this.requests = data;
  //     console.log(this.requests);
  //     this.isApiAvailable = true;
  //   }
  //   catch (error)
  //   {
  //     console.log("--- ERROR AT getAllUsers() ---");
  //     console.log(error);
  //     this.isApiAvailable = false;
  //   }
  // }

  

  async getAllRequests() {
    this.requestService.getRequest(currentUser.id).subscribe(
      (data) => {
        this.requests = data;
        console.log(this.requests);

      });
  }


  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.isApiAvailable = true;
    // Wait until authState.authIsInitialized true
    let intervalSubscription = interval(5000).subscribe(() => {
      if (authState.authIsInitialized)
      {
        this.getAllRequests();
        intervalSubscription.unsubscribe();
      }
    });
  }
 
}
