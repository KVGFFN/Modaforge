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
  badgeColor = ["medium", "light", "warning", "success", "danger"];

  constructor(
    private requestService: RequestService,
  ) { }

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

}
