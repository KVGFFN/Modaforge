import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { currentUser } from 'src/helpers/CurrentUser';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {

  @Input() requestTitle: any;
  @Input() requestDescription: any;
  @Input() requesterName: any;
  @Input() requestCreationDate: any;
  @Input() requestId: any;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    console.log("----- REQUEST COMPONENT")
    console.log(this.requesterName)
  }

  rejectRequest() {
    console.log("Reject request");
    this.requestService.rejectRequest(this.requestId, currentUser.id).subscribe((data)=>
    {
      console.log("%c SUCCESFULLY REJECTED ","color: green");
      console.log(data);
    }, (error)=> {
      console.log(error);
    });
  }

  acceptRequest() {
    console.log("Accept request");
    this.requestService.acceptRequest(this.requestId, currentUser.id).subscribe((data)=>
    {
      console.log("%c SUCCESFULLY ACCEPTED ","color: green");
      console.log(data);
    }, (error)=>
    {
      console.log(error);
    });
  }

  finishRequest() {
    console.log("Finish request");
    this.requestService.finishRequest(this.requestId, currentUser.id).subscribe((data)=>
    {
      console.log("%c SUCCESFULLY FINISHED ","color: green");
      console.log(data);
    }, (error)=>
    {
      console.log(error);
    });
  }

  inProgressRequest() {
    console.log("In progress request");
    this.requestService.inProgressRequest(this.requestId, currentUser.id).subscribe((data)=>
    {
      console.log("%c SUCCESFULLY IN PROGRESS ","color: green");
      console.log(data);
    }, (error)=> {
      console.log(error);
    });
  }

}
