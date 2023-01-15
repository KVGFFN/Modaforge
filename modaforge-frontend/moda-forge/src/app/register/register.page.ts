import { Component, OnInit } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Router } from '@angular/router';
import { loginHelper } from '../loginHelper';
import { environment } from 'src/environments/environment';
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

  country: string;
  city: string;
  street: string;
  streetnumber: string;
  zipcode: number;

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

  ILLEGAL_NAME_CHARACTERS = /[^a-zA-Z]/;
  hasIllegalCharacters: boolean = false;

  checkForIllegalCharacters() 
  {
    if (this.ILLEGAL_NAME_CHARACTERS.test(this.name)) {
      this.hasIllegalCharacters = true;
    }
    else
    {
      this.hasIllegalCharacters = false;
    }
  }

  allFieldsAreFilled: boolean = false;

  checkIfNotNull()
  {
    if (this.name == '' || this.email == '' || this.password == '') {
      this.allFieldsAreFilled = false;
    }
    else
    {
      this.allFieldsAreFilled = true;
    }
  }

  register() {
    console.log('%cregister() in register.page.ts', 'color: yellow');
    this.checkForIllegalCharacters();
    this.checkIfNotNull();
    if (this.hasIllegalCharacters == false) {
      // this.createUser();
      if (this.allFieldsAreFilled == true) {
        this.createUser();
      }
      else
      {
        console.log("%cregister.page.ts -- Not all fields are filled", "color:red");
        alert("Not all fields are filled, Please fill in all fields and try again.");
      }
    }
    else
    {
      console.log("%cregister.page.ts -- Illegal characters detected", "color:red");
      alert("Illegal characters detected in name or email, Please change them and try again.");
      this.name = "";
    }
  }

  createUser()
  {
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

  goToSignIn()
  {
    this.router.navigate(['/login']);
  }


  ngOnInit() {
    if (this.user) {
      loginHelper.isLoggedIn = true;
      console.log(">> USER IS LOGGED IN");;
      this.router.navigate(['/home']);
    }
    else {
      console.log(">> USER IS NOT LOGGED IN");
      loginHelper.isLoggedIn = false;
      this.router.navigate(['/register']);
    }
  }

}
