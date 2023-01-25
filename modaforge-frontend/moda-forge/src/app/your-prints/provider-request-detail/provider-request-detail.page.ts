import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LocalModelService } from 'src/app/services/local.model.service';
import { RequestService } from 'src/app/services/request.service';
import { currentUser } from 'src/helpers/CurrentUser';

@Component({
  selector: 'app-provider-request-detail',
  templateUrl: './provider-request-detail.page.html',
  styleUrls: ['./provider-request-detail.page.scss'],
})
export class ProviderRequestDetailPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private localModelService: LocalModelService,
    private requestService: RequestService,
    private http: HttpClient
  ) {}

  // MODEL VARIABLES //
  modelId: number;
  modelData: any;
  modelEmbed: string;
  modelURI: any;

  // REQUEST VARIABLES //
  requestId: number;
  requestData: any;

  requestTitle: string;
  requestDescription: string;
  requestDate: any;
  requestRequester: any;
  requestRequesterName: string;
  requestRequesterEmail: string;
  requestStatus: any;

  requestStatuses = ["Pending", "Accepted", "In progress", "Finished", "Rejected"];
  badgeColor = ["medium", "light", "warning", "success", "danger"];

  ngOnInit() {
    this.getRequest().then(() => {
      this.getModel();
    });
  }

  rejectRequest() {
    console.log("Reject request");
    this.requestService.rejectRequest(this.requestId, currentUser.id).subscribe((data)=>
    {
      console.log("%c SUCCESFULLY REJECTED ","color: green");
      console.log(data);
      this.router.navigate(['/your-prints'])
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
      this.router.navigate(['/your-prints'])
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

  async getRequest(): Promise<void> {
    return new Promise((resolve) => {
      this.requestId = +this.route.snapshot.paramMap.get('requestId');
      this.requestService.getRequestById(this.requestId).subscribe({
        next: (data) => {
          console.log('REQUEST: ');
          console.log(data);
          this.modelId = data.modelId;
          this.setRequestAttributes(data);
          resolve();
        },
        error: (e) => {
          console.log(e);
        },
      });
    });
  }

  setRequestAttributes(data: any) {
    this.requestTitle = data.title;
    this.requestDescription = data.description;
    this.requestDate = data.date;
    this.requestRequester = data.requester;
    this.requestRequesterEmail = data.requester.email;
    this.requestStatus = data.status;
    this.requestRequesterName = this.requestRequester.name
  }

  async getModel() {
    if (this.modelId) {
      this.localModelService.getModelById(this.modelId).subscribe({
        next: (data) => {
          console.log('MODEL: ');
          console.log(data);
          this.setModelAttributes(data);
        },
      });
    }
  }

  setModelAttributes(data: any) {
    this.modelEmbed = data.fileURL;
  }

  closeRequestDetail() {
    this.navCtrl.navigateForward('/your-prints', { animated: false });
  }


}
