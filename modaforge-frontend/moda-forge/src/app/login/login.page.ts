import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAnalytics } from 'firebase/analytics';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { authState } from 'src/helpers/authState';
import { currentUser } from 'src/helpers/CurrentUser';
import { loginHelper } from '../loginHelper';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

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
    this.router.navigate(['/register']);
  }


}
