import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { RequestService } from 'src/app/services/request.service';
import { authState } from 'src/helpers/authState';
import { currentUser } from 'src/helpers/CurrentUser';
import { Request } from 'src/modules/interfaces/request.interface';

@Component({
  selector: 'app-request-bar',
  templateUrl: './request-bar.page.html',
  styleUrls: ['./request-bar.page.scss'],
})
export class RequestBarPage implements OnInit {

  constructor
  (
    private requestService: RequestService, 
    private appComponent: AppComponent,
    private router: Router
  ) { }
  requests: Request[];
  request: Request;

  id: number;
  title: string;
  description: string;

  // foutmelding op html pagina
  isApiAvailable: boolean;

  isInitialized = authState.authIsInitialized;
  
  getMyRequests(uid: number)
  {
    this.requestService.getMyRequests(uid).subscribe(
      (data) => {
        this.requests = data;
      }
    )
  }

  goToCreateRequest()
  {
    this.router.navigate(['/create-request']);
  }
  
  
  ngOnInit() {
    this.isApiAvailable = true;
    this.appComponent.onInitDone.subscribe(() => {
      this.getMyRequests(currentUser.id);
    });

  }
}
