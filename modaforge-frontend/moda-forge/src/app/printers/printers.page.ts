import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.page.html',
  styleUrls: ['./printers.page.scss'],
})
export class PrintersPage implements OnInit {

  constructor( private userService: UserService) { }

  // Variables
  printers: any[] = ["test", "test2", "test3", "test4", "test5"];

  // User variables
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
  }

}
