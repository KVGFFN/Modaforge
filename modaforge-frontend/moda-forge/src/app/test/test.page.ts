import { Component, OnInit } from '@angular/core';
import { currentUser } from 'src/helpers/CurrentUser';
import { RequestService } from '../tempservices/request.service';
import { Request } from 'src/modules/interfaces/tempinterfaces/request.interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  // Variables
  request: Request;

  constructor(private requestService: RequestService) { }

  ngOnInit() {

  }

  getRequest()
  {
    // make yellow console log
    console.log("%ctest.page.ts -- getRequest()", "color: yellow")

    this.requestService.getRequest(currentUser.id).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  createRequest()
  {
    this.request =
    {
      id: 0,
      modeluid: "",
      modelurl: "",
      customerid: currentUser.id,
      providerid: 0,
      title: "This is a test model",
      description: "This is a test description",
      daterequested: new Date(),
      status: 0
    }

    console.log("user id: " + currentUser.id);
    console.log("%ctest.page.ts -- createRequest()", "color: yellow")
    this.requestService.createRequest(this.request, currentUser.id).subscribe(
      (data) => {
        console.log(data);
      });
  }

}
