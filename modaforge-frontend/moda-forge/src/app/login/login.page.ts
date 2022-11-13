import { Component, OnInit } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import { loginHelper } from '../loginHelper';
import { environment } from 'src/environments/environment';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);
  auth = getAuth(this.app);
  _loginhelper = loginHelper;

  user: any;


  
  constructor(private router: Router) {}

  email: string;
  password: string;

  login()
  {
    console.log("EXECUTED LOGIN METHOD LOGIN.PAGE.TS");
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      this.user = userCredential.user;
      console.log(">>USER: " + this.email + " created");
      console.log(">>USER MADE; LOGGING IN");
      this.router.navigate(['/home']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
    
  }


  ngOnInit() 
  {
    /*
    if (this.user != null)
    {
      this._loginhelper.isLoggedIn = true;
      this.router.navigate(['/home']);
    }
    */

    if (this.user)
    {
      console.log(">> USER IS LOGGED IN");;
      this.router.navigate(['/home']);
    }
    else
    {
      console.log(">> USER IS NOT LOGGED IN");
      this.router.navigate(['/login']);
    }
  }

}
