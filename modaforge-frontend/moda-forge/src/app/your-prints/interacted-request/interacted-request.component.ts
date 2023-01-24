import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { currentUser } from 'src/helpers/CurrentUser';

@Component({
  selector: 'app-interacted-request',
  templateUrl: './interacted-request.component.html',
  styleUrls: ['./interacted-request.component.scss'],
})
export class InteractedRequestComponent implements OnInit {

  @Input() requestTitle: any;
  @Input() requestDescription: any;
  @Input() requesterName: any;
  @Input() requestCreationDate: any;
  @Input() requestId: any;
  @Input() requestStatus: any;

  // Color of display badge
  requestStatuses = ["Pending", "Accepted", "In progress", "Finished", "Rejected"];
  badgeColors = ["medium", "light", "warning", "success", "danger"];
  badgeColor: any;

  constructor(
    private requestService: RequestService,
  ) { }

  ngOnInit() {
    console.log("----- REQUEST COMPONENT")
    console.log(this.requesterName)
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

  checkStatus(status) {
    if(status == 1) {
      this.badgeColor = this.badgeColors[1];
    } else if(status == 2) {
      this.badgeColor = this.badgeColors[2];
    } else if(status == 3) {
      this.badgeColor = this.badgeColors[3];
    }
  }
}
