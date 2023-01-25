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
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { threadId } from 'worker_threads';

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

  constructor
  (
    private router: Router, 
    private userService: UserService,
    private navCtrl: NavController,
    private http: HttpClient
  ) { }

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

  // USER_DATA: User = {
  //   id: undefined,
  //   name: undefined,
  //   verified: undefined,
  //   email: undefined,
  //   picture: undefined,
  //   providerRole: undefined,
  //   regionId: undefined,
  //   region: undefined
  // }



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

  USER_DATA: User =
  {
    Id: 0,
    Name: undefined,
    Verified: undefined,
    Email: undefined,
    Description: undefined,
    Picture: undefined,
    ProviderRole: false,
  }

  REGION_DATA: Region = {
    Id: undefined,
    Name: undefined,
    ZipCode: undefined,
    Country: undefined
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
      this.REGION_DATA = {
        Id: 0,
        Name: this.street,
        ZipCode: this.zipcode,
        Country: this.country
      }
      this.USER_DATA =
      {
        Id: 0,
        Name: this.name,
        Verified: false,
        Email: this.email,
        Description: " ",
        Picture: "https://ionicframework.com/docs/img/demos/avatar.svg",
        ProviderRole: false,
      }

      this.userService.addUser(this.USER_DATA).subscribe((data: any) => {
        console.log('--> userService.addUser register.page.ts:77');
        console.log(data);
      });
      
    })
    .then(() => {
      this.goToSignIn();
    })
    .catch(error => {
      console.log("%c" + error, "color:red");
    });
  }

  goToSignIn()
  {
    // this.router.navigate(['/login']);
    this.navCtrl.navigateForward('/login', {animated: false});
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

  ionViewWillEnter() {
    fetch(`${IP.local}/api/User`)
      .then(response => {
        if (response.ok) {
          APIstate.isActive = true;
          console.log('API is running');
        }
      })
      .catch(error => {
        APIstate.isActive = false;
        this.router.navigate(['/no-api']);
      });
  }
  
  
}
