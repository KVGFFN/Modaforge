import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { getAnalytics } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { currentUser } from 'src/helpers/CurrentUser';
import { loginHelper } from '../loginHelper';
import { IP } from 'src/helpers/IP';
import { APIstate } from 'src/helpers/APIstate';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }


  // Firebase Auth
  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);
  auth = getAuth(this.app);
  user: any;

  // variables
  email: string;
  password: string;

  // Sign in with email/password
  async signIn() {
    console.log("%c" + "login.page.ts -- signIn()", "color: yellow")
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => 
      {
        const user = userCredential.user;
        currentUser.username = user.displayName;
        currentUser.email = user.email;
        loginHelper.isLoggedIn = true;
        this.router.navigate(['/home']);
      })
      console.log(">>> Sign In successful!")
    } catch (error) {
      console.log(error);
    }
  }

  goToRegister()
  {
    // this.router.navigate(['/register']);
    this.navCtrl.navigateForward('/register', {animated: false});
  }

  ionViewDidEnter() {
    fetch(`${IP.local}/api/User`)
      .then(response => {
        if (response.ok) {
          APIstate.isActive = true;
        } 
      })
      .catch(error => {
        APIstate.isActive = false;
        this.router.navigate(['/no-api']);
      });
  }
  


}
