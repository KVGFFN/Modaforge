import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { Pipe, PipeTransform } from '@angular/core';
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

  // Display users with the searchbar
  handleChange(event) {
    console.log("handleChange() called");
    this.providerdata = [];
    for (let i = 0; i < this.userdata.length; i++) {
      if (this.userdata[i].providerRole == true) {
        if (this.userdata[i].name.toLowerCase().includes(event.target.value.toLowerCase())) {
          this.providerdata.push(this.userdata[i]);
          console.log(this.providerdata);
        }
      }
    }
    if (this.providerdata.length == 0) {
      console.log("No providers found");
    }
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
