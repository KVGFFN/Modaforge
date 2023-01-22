import { ChangeDetectorRef, Component } from '@angular/core';
import { $ } from 'protractor';
import { Routes, RouterModule, Router } from '@angular/router';
import { browserSessionPersistence, getAuth, onAuthStateChanged, setPersistence, inMemoryPersistence } from 'firebase/auth';
import { FirebaseApp, initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { APIstate } from 'src/helpers/APIstate';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IP } from 'src/helpers/IP';
import { currentUser } from 'src/helpers/CurrentUser';
import { UserService } from 'src/app/services/user.service';
import { authState } from 'src/helpers/authState';
import { loginHelper } from './loginHelper';
import { getAnalytics } from 'firebase/analytics';
import { EventEmitter } from '@angular/core';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

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
    { title: 'TESTING PAGE', url: '/test', icon: 'alert' },
  ];
  public labels = ['Favorite Clients'];



  users = [];
  profilepicture: any;
  avatar: any;

  email: string;
  password: string;

  constructor
  (
    private router: Router, 
    private http: HttpClient, 
    private userService: UserService,
    private cd: ChangeDetectorRef
  ) {}

  app = initializeApp(environment.firebaseConfig);
  analytics = getAnalytics(this.app);
  auth = getAuth(this.app);

  username: string;
  loginState = loginHelper.isLoggedIn;

  logout()
  {
    console.log("%c" + "app.component.ts -- logout()", "color: yellow")
    loginHelper.isLoggedIn = false;
    // logout  firebase
    this.auth.signOut();
    this.router.navigate(['/login']);
  }

  isLoginOrRegister()
  {
    return this.router.url.startsWith('/login') || this.router.url.startsWith('/register');
  }

  goToProfile()
  {
    this.router.navigate(['/profile']);
  }

  async getCurrentUser()
  {
    return new Promise<void>((resolve, reject) =>
    {
      this.userService.getUserByNameEmail(currentUser.username, currentUser.email).subscribe((data: any) => {
        console.log(data);
        currentUser.id = data["id"];
        resolve();
      });
    });
  }

  firebaseGetCurrentUser(auth)
  {
    return new Promise((resolve, reject) => 
    {
      const unsubscribe = onAuthStateChanged(auth, (user) => 
      {
        unsubscribe();
        resolve(user);
      }, reject);
    })
  }

  async initializeFirebaseAuth()
  {
    return new Promise<void>((resolve) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          console.log("USER IS LOGGED IN");
          currentUser.username = user.displayName;
          currentUser.email = user.email;
          this.username = user.displayName;
          this.getCurrentUser();
          loginHelper.isLoggedIn = true;
        } else {
          console.log("USER IS NOT LOGGED IN");
          loginHelper.isLoggedIn = false;
        }
        this.authIsInitialized.emit();
        this.getCurrentUser();
        resolve();
      });
    })
  }

  checkAPIState()
  {
    this.http.get(IP.local + '/api/User').subscribe((data: any) => {
      APIstate.isActive = true;
      console.log("API IS RUNNING");
    }, (error) => {
      APIstate.isActive = false;
      alert("API is not running at " + IP.local);
    });
  }

  ngOnInit()
  {
    this.initializeFirebaseAuth().then(() => {
      this.getCurrentUser().then(() => {
        this.onInitDone.emit();
      });
    });
  }
  authIsInitialized = new EventEmitter<void>();
  onInitDone = new EventEmitter<void>();
}
