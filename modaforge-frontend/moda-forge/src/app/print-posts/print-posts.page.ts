import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-posts',
  templateUrl: './print-posts.page.html',
  styleUrls: ['./print-posts.page.scss'],
})
export class PrintPostsPage implements OnInit {

   // Variables
   posts: any[] = ["test", "test2", "test3", "test4", "test5"];
   showCreatePostForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCreatePostForm() {
    this.showCreatePostForm = !this.showCreatePostForm;;
  }

}
