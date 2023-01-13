import { Component } from '@angular/core';
import { $ } from 'protractor';
import { loginHelper } from './loginHelper';
import { Routes, RouterModule, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FirebaseApp, initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { APIstate } from 'src/helpers/APIstate';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IP } from 'src/helpers/IP';
import { currentUser } from 'src/helpers/CurrentUser';
import { app, user, auth } from 'src/helpers/authentication';
import { UserService } from './tempservices/user.service';
import { authState } from 'src/helpers/authState';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Library', url: '/library', icon: 'library' },
    //{ title: 'Feedback', url: '/folder/Feedback', icon: 'cube' },
    { title: 'Print posts', url: '/print-posts', icon: 'cube' },
    { title: 'Printers', url: '/printers', icon: 'telescope' },
    { title: 'Near you', url: '/near-you', icon: 'location' },
    { title: 'Your prints', url: '/your-prints', icon: 'cube' },
    { title: 'TESTING PAGE', url: '/test', icon: 'alert' },
  ];
  public labels = ['Favorite Clients'];



  users = [];
  profilepicture: any;
  avatar: any;

  email: string;
  password: string;

  // declare new loginHelper

  _loginHelper = loginHelper;



  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  app = app;
  user = user;
  auth = auth;

  username: string;

  logout()
  {
    console.log("LOGGING OUT");
    this.auth.signOut();
    this.router.navigate(['/register']);
  }

  goToProfile()
  {
    this.router.navigate(['/profile']);
  }


  ngOnInit()
  {
    console.log("%capp.component.ts -- ngOnInit()", "color: yellow")
    this.http.get(IP.local + '/api/User').subscribe((data: any) => {
      APIstate.isActive = true;
      console.log("API IS RUNNING");
    }, (error) => {
      APIstate.isActive = false;
      alert("API is not running at " + IP.local);
    });

    onAuthStateChanged(this.auth, (user) =>
    {
      if (user) 
      {
        const uid = user.uid;
        this._loginHelper.isLoggedIn = true;
        console.log(user.email);
        console.log(user.displayName);
        this.username = user.displayName;
        currentUser.username = user.displayName;
        currentUser.email = user.email;
        this.router.navigate(['/home']);
      } 
      else 
      {
        this._loginHelper.isLoggedIn = false;
        this.router.navigate(['/register']);
      }
      authState.authIsInitialized = true;
    });


    console.log("logged in state: " + this._loginHelper.isLoggedIn);
  }
}
