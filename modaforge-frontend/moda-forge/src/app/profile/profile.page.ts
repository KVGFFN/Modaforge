import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private userService: UserService,
    private appComponent: AppComponent
  ) { }

  // variables
  name: string;
  email: string;
  picture: string;
  userdata = [];
  userIsLoaded: boolean = false;

  ngOnInit() {
    this.appComponent.onInitDone.subscribe(() => {
      this.setUserInformation();
    });
  }

  setUserInformation()
  {
    this.name = currentUser.username;
    this.email = currentUser.email;
  }


}
