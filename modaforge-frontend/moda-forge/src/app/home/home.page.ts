import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FirebaseApp, initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { app, user, auth } from 'src/helpers/authentication';
import { authState } from 'src/helpers/authState';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userName: string;
  userMail: string;

  app = app;
  user = user;
  auth = auth;

  constructor(private userService: UserService) 
  {

  }

  ngOnInit(){
    // Wait until auth is initialized, prevents "currentUser.username" being null
    let intervalSubscription = interval(1000).subscribe(() => {
      if (authState.authIsInitialized) {
        this.userName = currentUser.username;
        this.userMail = currentUser.email
        this.getCurrentUser();
        intervalSubscription.unsubscribe();
      }
    });    
  }

  async getCurrentUser()
  {
    this.userService.getUserByNameEmail(this.userName, this.userMail).subscribe((data: any) => {
      console.log(data);
      currentUser.id = data["id"];
    });
  }


  

}
