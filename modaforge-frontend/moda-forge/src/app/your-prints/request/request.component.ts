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
  @Input() requestStatus: any;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    console.log("----- REQUEST COMPONENT")
    console.log(this.requesterName)
  }

}
