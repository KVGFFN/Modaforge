import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { ModalController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModelViewerPage } from '../model-viewer/model-viewer.page';
import { Request } from 'src/modules/interfaces/request.interface';
import { LocalModel } from 'src/modules/interfaces/local.model.interface';
import { LocalModelService } from '../services/local.model.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.page.html',
  styleUrls: ['./accept-request.page.scss'],
})
export class AcceptRequestPage implements OnInit {

  /* FUNCTIONALITIES
    - Create a request: currentUser.id gets added to request
    - getAllProviders gets loaded
    - user should go to model library to select his model
    - user should be able to see a list of providers and select one
  */

  // general variables
  requestdata: Request;
  modelSelected: boolean = false;
  requesterId: number;
  requestId: number;
  providerId: number;
  request: Request;

  // Request variables
  requestTitle: string;
  requestDescription: string;
  creationDate: Date;
  

  // model variables
  requestModelId: any;
  modelName: any;
  model: any;
  modelEmbedURL: string;
  modelToPost: LocalModel;
  localModelId: number;


  constructor
  (
    private userService: UserService,
    private localModelService: LocalModelService,
    private requestService: RequestService,
    private appComponent: AppComponent,
    private modalCtrl: ModalController,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.requesterId = params['requesterId'];
      this.requestId = params['requestId'];
    });
  }

  ngOnInit() {
    this.setProviderInformation();
    //this.getModelInformation();
    this.getRequestById();
  }

  ionViewWillEnter() {
    this.getModelInformation();
  }

  setProviderInformation() {
    this.providerId = currentUser.id;
  }

  getRequestById() {
    console.log(">>>>>>>>> GET REQUEST BY ID <<<<<<<<<")
    this.requestService.getRequestById(this.requestId).subscribe((data) => {
      this.requestdata = data;
      console.log(data)
      this.requestTitle = data["title"];
      this.requestDescription = data["description"];
      this.requestModelId = data["modelId"];
      this.creationDate = data["creationDate"];
    });
  }

  getModelInformation() {
    this.localModelService.getModelById(this.requestModelId).subscribe((data) => {
      console.log(">>>>>>>>> GET MODEL INFORMATION <<<<<<<<<")
      console.log(data)
      this.model = data;
      this.modelName = data["name"];
      this.localModelId = data["id"];
      // this.modelEmbedURL = data["embedUrl"];
    });
  }

  async viewCurrentModel() {
    const modal = await this.modalCtrl.create({
      component: ModelViewerPage,
      componentProps:
      {
        modelEmbedURL: this.model["embedUrl"]
      }
    });
    return await modal.present();
  }

  async updateRequest() {
    this.request = {
      title: this.requestTitle,
      description: this.requestDescription,
      requesterId: this.requesterId,
      providerId: this.providerId,
      modelId: this.localModelId,
      creationDate: this.creationDate,
      regionId: 1,                                // REGION HAS TO BE CHANGED
      tags: "test,test,test"                      // USER HAS TO GIVE IN TABS
    };
    this.requestService.updateRequest(this.request, this.requestId,).subscribe(response => {
      console.log(response);
    }, error => {
      console.log("ERROR updateRequest line 122")
      console.log(error);
    });
    alert("Request has been accepted!");
    // this.router.navigate(['/print-posts'])
    // .then(() => {
    //   window.location.reload();
    // });
  }

  async acceptRequest() {
    try {
      this.updateRequest();
    } catch(error) {
      console.log("ERROR updateRequest")
      console.log(error);
    }
  }

}
