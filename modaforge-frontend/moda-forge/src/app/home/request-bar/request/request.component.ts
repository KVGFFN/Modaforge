import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {

  @Input() nameModel: any;
  @Input() namePrinter: any;
  @Input() description: any;
  @Input() requestStatus: any;

  requestStatuses = ["Pending", "Accepted", "In progress", "Finished", "Rejected"];
  badgeColor = ["medium", "light", "warning", "success", "danger"];

  constructor() { }

  ngOnInit() {
  }

  
}
