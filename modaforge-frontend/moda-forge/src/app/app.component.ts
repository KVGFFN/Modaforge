import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Library', url: '/library', icon: 'cube' },
    //{ title: 'Feedback', url: '/folder/Feedback', icon: 'cube' },
    { title: 'Print posts', url: '/print-posts', icon: 'cube' },
    { title: 'Printers', url: '/printers', icon: 'cube' },
    { title: 'Near you', url: '/near-you', icon: 'cube' },
    { title: 'Your prints', url: '/your-prints', icon: 'cube' },
  ];
  public labels = ['Favorite Clients'];
  constructor() {}
}
