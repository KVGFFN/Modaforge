import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RequestService } from 'src/app/services/request.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { AppComponent } from '../app.component';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-your-prints',
  templateUrl: './your-prints.page.html',
  styleUrls: ['./your-prints.page.scss'],
})
export class YourPrintsPage implements OnInit {

  constructor(
    private userService: UserService,
    private requestService: RequestService,
    private appComponent: AppComponent
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

  async ionViewDidEnter()
  {
    await this.waitTillTrue();
    this.getRequestsByProvider(currentUser.id);
  }

  // variables
  isProvider: boolean;
  userdata = [];
  requests: any[];
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

  async getRequestsByProvider(id: number)
  {
    // Runs before getUserById
    this.requestService.GetAllIncomingRequests(id).subscribe(data => {
      this.requests = data;
      console.log("DATA: ")
      console.log(this.requests);
    }, error => {
      console.log(error);
    });
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

}
