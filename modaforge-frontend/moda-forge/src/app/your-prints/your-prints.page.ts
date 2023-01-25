import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RequestService } from 'src/app/services/request.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { AppComponent } from '../app.component';
import { Pipe } from '@angular/core';
import { ProviderRequestDetailPage } from './provider-request-detail/provider-request-detail.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-your-prints',
  templateUrl: './your-prints.page.html',
  styleUrls: ['./your-prints.page.scss'],
})
export class YourPrintsPage implements OnInit {

  constructor(
    private userService: UserService,
    private requestService: RequestService,
    private appComponent: AppComponent,
    private router: Router,
    ) { }

  ngOnInit() {
    console.log("INIT")
    this.getAllUsers();
    this.appComponent.onInitDone.subscribe(() => {
      this.currentUserId = currentUser.id;
      console.log("INIT------- currentuser:" + currentUser.id)
      this.setUserInformation();
      //this.getRequestsByProvider(currentUser.id)
    });
    this.checkProviderRole(this.currentUserEmail, this.currentUserName);
  }

  goToRequest(id: number)
  {
    this.router.navigate(['/your-prints/provider-request-detail', id]);
  }

  async ionViewDidEnter()
  {
    await this.waitTillTrue();
    this.getIncomingRequestsByProvider(currentUser.id);
    this.getInteractedRequestsByProvider(currentUser.id);
  }

  // variables
  isProvider: boolean;
  userdata = [];
  incoming_requests: any[];
  interacted_requests: any[];
  requester: any[];

  currentUserName = currentUser.username;
  currentUserEmail = currentUser.email;

  userIsLoaded: boolean = false;
  providerRole: boolean;

  currentUserId: number;

  // pass to request component
  requestTitle: any;
  requestDescription: any;

  ngAfterViewInit() {

  }

  async getIncomingRequestsByProvider(id: number)
  {
    // Runs before getUserById
    this.requestService.GetAllIncomingRequests(id).subscribe(data => {
      this.incoming_requests = data;
      console.log("DATA: ")
      console.log(this.incoming_requests);
    }, error => {
      console.log(error);
    });
  }

  async getInteractedRequestsByProvider(id: number)
  {
    this.requestService.getAllInteractedRequests(id).subscribe(data => {
      this.interacted_requests = data;
      console.log("-- INTERACTED REQUESTS --")
      console.log(this.interacted_requests);
    })
  }

  

  // Get all users
  async getAllUsers() {
    try {
      this.userService.getAllUsers().subscribe(data => {
        //console.log(data);
        this.userdata = data;
        this.userIsLoaded = true;
      }, error => {
        console.log(error);
      });
    }
    catch (e) {
      console.log(e);
    }

  }

  // Oplossing op probleem waarbij attributen worden vastgelegd ongeacht dat Users zijn geladen of niet
  async waitTillTrue() {
    while (this.userIsLoaded == false) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Set current user values
  setUserInformation() {
    this.currentUserName = currentUser.username;
    this.currentUserEmail = currentUser.email;
    this.currentUserId = currentUser.id;
  }

  // Check if user is a provider
  checkProviderRole(email: string, name: string) {
    this.getAllUsers();
    this.waitTillTrue().then(() => {
      console.log(this.userdata)
      this.userdata.forEach(element => {
        if (element.name == name && element.email.toLowerCase() == email) {
          this.providerRole = element.providerRole;
        }
      });
    })
  }

  goToProfilePage() {
    this.router.navigate(['/profile']);
  }

}
