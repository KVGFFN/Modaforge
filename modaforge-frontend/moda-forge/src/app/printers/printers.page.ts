import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.page.html',
  styleUrls: ['./printers.page.scss'],
})
export class PrintersPage implements OnInit {

  constructor
  (
    private userService: UserService,
    private router: Router
  ) { }

  // variables
  id: number;
  name: string;
  verified: boolean;
  email: string;
  picture: string;
  providerRole: boolean;
  userdata = [];
  providerdata = [];
  pictureLoaded: boolean = false;
  userIsLoaded: boolean = false;

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

  async waitTillTrue() {
    while (this.userIsLoaded == false) {
      await new Promise(resolve => setTimeout(resolve, 1000));

    }
    /*if (this.userIsLoaded) {
      for (let i = 0; i < this.userdata.length; i++) {
        console.log(this.userdata[i].name);
        if (this.userdata[i].name == currentUser.username && this.userdata[i].email == currentUser.email) {
          this.name = this.userdata[i].name;
          this.email = this.userdata[i].email;
          this.picture = this.userdata[i].picture;
        }
      }
    }*/
  }

  // Display users that are providers
  displayProviders() {
    //this.getAllUsers();
    this.waitTillTrue().then(() => {
      for (let i = 0; i < this.userdata.length; i++) {
        if (this.userdata[i].providerRole == true) {
          this.providerdata.push(this.userdata[i]);
          console.log(this.providerdata);
        }
      }
      if (this.providerdata.length == 0) {
        console.log("No providers found");
      }
    });
  }

  ngOnInit() {
    this.getAllUsers();
    this.displayProviders();
  }

  sendRequest(provider: any)
  {
    currentUser.selectedProvider = provider;
    console.log(currentUser.selectedProvider)
    this.router.navigate(['/create-request']);
  }

}
