import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { Request } from 'src/modules/interfaces/request.interface';

@Component({
  selector: 'app-request-bar',
  templateUrl: './request-bar.page.html',
  styleUrls: ['./request-bar.page.scss'],
})
export class RequestBarPage implements OnInit {

  constructor(private requestService: RequestService) { }
  requests: Request[];
  request: Request;

  id: number;
  title: string;
  description: string;

  // foutmelding op html pagina
  isApiAvailable: boolean;

  getRequestByUserId(id: number)
  {
    
  }

  ngOnInit() {
    this.isApiAvailable = true;
    this.requestService.getMyRequests(currentUser.id).subscribe(
      (data) => {
        this.requests = data;
      }
    )
  
  }

  


}
