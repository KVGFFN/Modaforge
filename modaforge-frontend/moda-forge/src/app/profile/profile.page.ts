import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/modules/interfaces/user.interface';
import { cpuUsage } from 'process';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private userService: UserService,
    private http: HttpClient,
  ) { }

  // variables
  id: number;
  name: string;
  verified: boolean;
  email: string;
  picture: string;
  providerRole: boolean;
  userdata = [];
  userIsLoaded: boolean = false;

  buttonText: string = "Become a printer";

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
      console.log("waitTillTrue() called");
      this.userdata.forEach(element => {
        if (element.name == currentUser.username && element.email.toLowerCase() == currentUser.email) {
          element.ProviderRole = !element.ProviderRole;
          this.userService.updateUser(element, element.id).subscribe(data => {
            console.log(data);
            console.log("ProviderRole updated");
          }, error => {
            console.log(error);
          });
        }
      });
    })
  }

  // Get providerRole
  getProviderRole(name: string, email: string) {
    // Fetch the initial value of the "providerRole" from the API
    this.userService.getUserByNameEmail(name, email).subscribe(data => {
      this.providerRole = data.ProviderRole;
      this.buttonText = this.providerRole ? 'Deactivate printer role' : 'Become a printer';
    });
  }



  ngOnInit() {
    this.name = currentUser.username;
    this.email = currentUser.email;
  }


}