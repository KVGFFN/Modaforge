import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
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

  @Output() refresh = new EventEmitter();

  onRefresh()
  {
    this.refresh.emit();
  }

  id: number;
  title: string;
  description: string;
  requestStatus: number;
  //providerName: string;

  // foutmelding op html pagina
  isApiAvailable: boolean;

  isInitialized = authState.authIsInitialized;
  
  getMyRequests()
  {
    console.log("executed getmyrequests")
    this.requestService.getMyRequests(currentUser.id).subscribe(
      (data) => {
        this.requests = data;
        console.log("request data requestbar")
        console.log(data);
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
      this.getMyRequests();
    });
    
    this.ionViewWillEnter();
  }

  ionViewWillEnter()
  {
    console.log("IONVIEWWILLENTER" + currentUser.id);
    this.getMyRequests();
  }

  goToRequest(requestId: number)
  {
    this.router.navigate(['/home/request-detail', requestId]);
  }

  getProviderById(id: number) {
    //this.requestService.getAllRequestByProviderId(id).subscribe(
  }
}
