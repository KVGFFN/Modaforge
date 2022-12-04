import { Component, OnInit } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Router } from '@angular/router';
import { loginHelper } from '../loginHelper';
import { environment } from 'src/environments/environment';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from 'src/modules/interfaces/user.interface';
import { Region } from 'src/modules/interfaces/user.interface';
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

  constructor(private router: Router, private userService: UserService) {}

  // User
  name: string;
  email: string;
  password: string;

  // Region
  regionName: string;
  regionZipcode: number;

  USER_DATA: User = {
    id: undefined,
    name: undefined,
    verified: undefined,
    email: undefined,
    regionId: undefined,
    region: undefined
  }

  REGION_DATA: Region = {
    id: undefined,
    name: undefined,
    zipcode: undefined
  }

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

  register()
  {
    console.log("EXECUTED LOGIN METHOD LOGIN.PAGE.TS");
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
    .then((userCredential) => {
      this.user = userCredential.user;
      this.updateUserName(this.name);
      console.log("VV USERINFO VV");
      console.log("NAME: " + this.user.displayName);
      console.log("EMAIL: " + this.user.email);

      // Add user to database

      this.REGION_DATA.id = 0;
      this.REGION_DATA.name = this.regionName;
      this.REGION_DATA.zipcode = this.regionZipcode;

      this.USER_DATA.id = 0;
      this.USER_DATA.email = this.email;
      this.USER_DATA.name = this.name
      this.USER_DATA.verified = false;
      this.USER_DATA.regionId = 0;
      this.USER_DATA.region = this.REGION_DATA;

      
      this.userService.addUser(this.USER_DATA).subscribe((data: any) => {
        console.log("--> userService.addUser login.page.ts:77")
        console.log(data);
      });
      this.router.navigate(['/home']);
      
    })
    
    .catch((error) => {
      const errorMessage = error.message;
      console.log("ERROR: " + errorMessage);
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
