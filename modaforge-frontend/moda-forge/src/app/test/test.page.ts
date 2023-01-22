import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  

  constructor
  (
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  goto()
  {
    this.router.navigate(['/create-request']);
  }

}
