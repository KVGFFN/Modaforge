import { Component, OnInit } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

  name: string;
  email: string;
  password: string;

  async updateUserName(name: string)
  {
    this.user = this.auth.currentUser;
    await updateProfile(this.user, {
      displayName: name
    }).then(() => {
      console.log("Name updated to " + name);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  login()
  {
    console.log("EXECUTED LOGIN METHOD LOGIN.PAGE.TS");
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      this.user = userCredential.user;
      this.updateUserName(this.name);
      console.log("VV USERINFO VV");
      console.log("NAME: " + this.user.displayName);
      console.log("EMAIL: " + this.user.email);

      this.router.navigate(['/home']);
      
    })
    
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }


  ngOnInit() 
  {
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
