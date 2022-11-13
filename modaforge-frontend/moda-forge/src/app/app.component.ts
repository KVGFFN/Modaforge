import { Component } from '@angular/core';
import { $ } from 'protractor';
import { loginHelper } from './loginHelper';
import { Routes, RouterModule, Router } from '@angular/router';

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

  isLoggedIn: boolean = loginHelper.isLoggedIn;


  constructor(private router: Router) {}

  ngOnInit()
  {
    if (!this.isLoggedIn)
    {
      this.router.navigate(['/login']);
    }
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
