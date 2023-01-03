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
import { Region } from 'src/modules/interfaces/region.interface';
import { IP } from 'src/helpers/IP';
import { APIstate } from 'src/helpers/APIstate';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  // Configuration of registration
  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);
  auth = getAuth(this.app);
  _loginhelper = loginHelper;
  user: any;
  apistate = APIstate.isActive;
  IP = IP.local;

  constructor(private router: Router, private userService: UserService) { }

  // Register check
  userExists: boolean = false;

  // User
  name: string;
  email?: string;
  password: string;

  // Region
  regionName: string;
  regionZipcode: number;

  USER_DATA: User = {
    id: undefined,
    name: undefined,
    verified: undefined,
    email: undefined,
    picture: undefined,
    regionId: undefined,
    region: undefined
  }

  REGION_DATA: Region = {
    id: undefined,
    name: undefined,
    zipcode: undefined
  }

  async updateUserName(name: string) {
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

  register() {
    console.log('%cregister() in register.page.ts', 'color: yellow');

    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(userCredential => {
        this.user = userCredential.user;
        this.updateUserName(this.name);
        console.log('VV USERINFO VV');
        console.log(`NAME: ${this.user.displayName}`);
        console.log(`EMAIL: ${this.user.email}`);

        // Add user to database
        this.USER_DATA = {
          id: 0,
          email: this.email,
          name: this.name,
          verified: false,
          picture: 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', // default picture
          regionId: 0,
          region: {
            id: 0,
            name: this.regionName,
            zipcode: this.regionZipcode
          }
        };

        this.userService.addUser(this.USER_DATA).subscribe((data: any) => {
          console.log('--> userService.addUser register.page.ts:77');
          console.log(data);
        });
        this.router.navigate(['/home']);
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(`ERROR: ${errorMessage}`);
        alert(`ERROR: ${errorMessage}`);
      });
  }



  ngOnInit() {
    if (this.user) {
      console.log(">> USER IS LOGGED IN");;
      this.router.navigate(['/home']);
    }
    else {
      console.log(">> USER IS NOT LOGGED IN");
      this.router.navigate(['/register']);
    }
  }

}
