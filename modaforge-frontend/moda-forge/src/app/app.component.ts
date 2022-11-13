import { Component } from '@angular/core';
import { $ } from 'protractor';
import { loginHelper } from './loginHelper';
import { Routes, RouterModule, Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FirebaseApp, initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

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
  ];
  public labels = ['Favorite Clients'];

  

  users = [];
  profilepicture: any;
  avatar: any;

  email: string;
  password: string;

  // declare new loginHelper
  
  _loginHelper = loginHelper;



  constructor(private router: Router) {}

  app = initializeApp(environment.firebaseConfig);
  auth = getAuth(this.app);
  user = this.auth.currentUser;

  
  ngOnInit()
  {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const uid = user.uid;
        this._loginHelper.isLoggedIn = true;
        this.router.navigate(['/home']);
      } else {
        this._loginHelper.isLoggedIn = false;
        this.router.navigate(['/login']);
      }
      console.log("logged in state onAuthStateChange " + this._loginHelper.isLoggedIn);
    });

    this.users = 
    [
      {
        id: 1,
        name: 'John Doe',
        avatar: '',
      },
      {
        id: 2,
        name: 'Jane Doe',
        avatar: '',
      }
    ]
    console.log("logged in state: " + this._loginHelper.isLoggedIn);
  }
}
