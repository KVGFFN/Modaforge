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

  ngOnInit() {
    this.name = currentUser.username;
    this.email = currentUser.email;
  }


}
