import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-print-posts',
  templateUrl: './print-posts.page.html',
  styleUrls: ['./print-posts.page.scss'],
})
export class PrintPostsPage implements OnInit {

   // Variables
   posts: any[];
   showCreatePostForm: boolean = false;

  constructor
  (
    private requestService: RequestService,
  ) { }

  ngOnInit() {
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

}
