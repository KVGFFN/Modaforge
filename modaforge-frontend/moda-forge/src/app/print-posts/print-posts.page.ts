import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
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
   showCreatePostForm: boolean = false;

   loaded: boolean = false;

  constructor
  (
    private requestService: RequestService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getAllUsers();
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
        console.log(data);
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
  
}
