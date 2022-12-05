import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  // variables
  name: string;
  email: string;
  picture: string;
  userdata = [];
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

  // Oplossing op probleem waarbij attributen worden vastgelegd ongeacht dat Users zijn geladen of niet
  async waitTillTrue() {
    while (this.userIsLoaded == false) {
      await new Promise(resolve => setTimeout(resolve, 1000));

    }
    if (this.userIsLoaded) {
      for (let i = 0; i < this.userdata.length; i++) {
        console.log(this.userdata[i].name);
        if (this.userdata[i].name == currentUser.username && this.userdata[i].email == currentUser.email) {
          this.name = this.userdata[i].name;
          this.email = this.userdata[i].email;
          this.picture = this.userdata[i].picture;
        }
      }
    }
  }


  ngOnInit() {
    this.getAllUsers();
    this.waitTillTrue();
  }


}
