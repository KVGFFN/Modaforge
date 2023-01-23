import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { AppComponent } from '../app.component';
import { RequestService } from '../services/request.service';
import { Request } from 'src/modules/interfaces/request.interface';
import { catchError, from, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/modules/interfaces/user.interface';
import { cpuUsage } from 'process';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private userService: UserService,
    private requestService: RequestService,
    private appComponent: AppComponent
    //private http: HttpClient,
  ) { }

  // variables
  id: number;
  name = currentUser.username;
  verified: boolean;
  email = currentUser.email;
  picture: string;
  providerRole: boolean;
  userdata = [];

  userIsLoaded: boolean = false;
  requests: any[];
  status = ["Pending", "In Progress", "Done"];

  // HTML
  badgeColor: string = "light";

  getAllUsers() {
    try {
      this.userService.getAllUsers().subscribe(data => {
        console.log(data);
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

  updateProviderRole() {
    console.log("updateProviderRole() called");
    this.getAllUsers();
    this.waitTillTrue().then(() => {
      console.log(this.userdata)
      console.log("waitTillTrue() called");
      this.userdata.forEach(element => {
        if (element.name == currentUser.username && element.email.toLowerCase() == currentUser.email) {
          if (element.providerRole == true) {
            // Do nothing
          } else {
            element.providerRole = true;
            this.userService.updateUser(element, element.id).subscribe(data => {
              console.log(data);
              console.log("ProviderRole updated");
              this.providerRole = true;
            }, error => {
              console.log(error);
            });
          }
        }
      });
    })
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

  ngOnInit() {
    this.appComponent.onInitDone.subscribe(() => {
      this.setUserInformation();
    });
    this.checkProviderRole(this.email, this.name);
  }

  setUserInformation() {
    this.name = currentUser.username;
    this.email = currentUser.email;
  }


  async getMyRequests() {
    const requestObservable = from(this.requestService.getMyRequests(currentUser.id));
    requestObservable.pipe(
      map(requests => {
        return requests.map(request => {
          request.status = this.status[request.status];
          return request;
        });
      }),
      tap(data => {
        console.log(data);
        this.requests = data;
      }),
      catchError(error => {
        console.log(error);
        return of(error);
      }),
    ).subscribe();
  }


  async ionViewWillEnter() {
    this.getMyRequests();
  }


}