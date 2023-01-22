import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../services/user.service';
import { User } from 'src/modules/interfaces/user.interface';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.page.html',
  styleUrls: ['./create-request.page.scss'],
})
export class CreateRequestPage implements OnInit {

  /* FUNCTIONALITIES
    - Create a request: currentUser.id gets added to request
    - getAllProviders gets loaded
    - user should go to model library to select his model
    - user should be able to see a list of providers and select one
  */

  // variables
  providers: User[] = [];

  constructor
  (
    private userService: UserService,
    private appComponent: AppComponent
  ) { }

  ngOnInit() 
  {
    this.appComponent.onInitDone.subscribe(() => {
      this.getAllProviders();
    });
  }






  
  // FUNCTIONS //

  getAllProviders()
  {
    this.userService.getAllProviders().subscribe((data) => {
      this.providers = data;
    });
  }



  createRequest()
  {

  }










}
