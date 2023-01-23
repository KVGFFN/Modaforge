import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { AppComponent } from '../app.component';
import { currentUser } from 'src/helpers/CurrentUser';
import { RequestService } from '../services/request.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-print-posts',
  templateUrl: './print-posts.page.html',
  styleUrls: ['./print-posts.page.scss'],
})
export class PrintPostsPage implements OnInit {

  // Variables
  posts: any[];
  userdata = [];
  name = currentUser.username;
  email = currentUser.email;
  showCreatePostForm: boolean = false;
  providerRole: boolean = false;
  loaded: boolean = false;

  constructor
  (
    private requestService: RequestService,
    private userService: UserService,
    private router: Router,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.getAllUsers();
    this.appComponent.onInitDone.subscribe(() => {
      this.setUserInformation();
    });
    this.checkProviderRole(this.email, this.name);
  }

  setUserInformation() {
    this.name = currentUser.username;
    this.email = currentUser.email;
  }

  // Check if user is a provider
  checkProviderRole(email: string, name: string) {
    this.getAllUsers();
    this.waitTillTrue().then(() => {
      console.log(this.userdata)
      this.userdata.forEach(element => {
        if (element.name == name && element.email.toLowerCase() == email) {
          this.providerRole = element.providerRole;
        }
      });
    })
  }

  async waitTillTrue() {
    while (this.loaded == false) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  toggleCreatePostForm() {
    this.showCreatePostForm = !this.showCreatePostForm;;
  }

  ionViewWillEnter() {
    this.getProviderlessPosts();
  }

  getProviderlessPosts()
  {
    this.requestService.getAllPublicRequests().subscribe(
      (data) => {
        console.log(data);
        this.posts = data;
      },
      (error) => {
        console.log(error);
      });
  }

  // Get all users
  getAllUsers() {
    this.loaded = false;
    this.userService.getAllUsers().subscribe(
      (data) => {
        //console.log(data);
        this.userdata = data;
        this.loaded = true;
      },
      (error) => {
        console.log(error);
      });
  }

  getRequesterName(requesterId: string) {
    let requester = this.userdata.find(user => user.id == requesterId);
    if (requester) {
      return requester.name;
    } else {
      return 'User not found';
    }
  }

  goToCreateRequest() {
    this.router.navigate(['/create-request']);
  }
  
}
