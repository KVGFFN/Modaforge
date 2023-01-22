import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FirebaseApp, initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { app, user, auth } from 'src/helpers/authentication';
import { authState } from 'src/helpers/authState';
import { interval, take } from 'rxjs';
import { AppComponent } from '../app.component';

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

  constructor
  (
    private userService: UserService,
    private appComponent: AppComponent
  ) 
  {

  }

  ngOnInit(){
    this.appComponent.onInitDone
    .pipe(take(1)).subscribe(() => {
      console.log("VOER UIT??????")
      console.log(`%c USERNAME: ${currentUser.username}`, `color: green;`)
      console.log(`%c USERNAME: ${currentUser.email}`, `color: green;`)
      console.log(`%c USERNAME: ${currentUser.id}`, `color: green;`)
    });

  }



  

}
