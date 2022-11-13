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

  loggedInState: boolean;


  constructor(private router: Router) {}

  app = initializeApp(environment.firebaseConfig);
  auth = getAuth(this.app);
  user = this.auth.currentUser;

  
  ngOnInit()
  {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        sessionStorage.setItem('isLogged', 'true');
        const uid = user.uid;
        this.loggedInState = true;
        this.router.navigate(['/home']);
      } else {
        // User is signed out
        sessionStorage.setItem('isLogged', 'false');
        this.loggedInState = false;
        this.router.navigate(['/login']);
      }
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
  }
}
