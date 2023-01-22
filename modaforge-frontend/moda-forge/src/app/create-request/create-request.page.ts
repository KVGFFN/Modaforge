import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { ModelViewerPage } from '../model-viewer/model-viewer.page';
import { Request } from 'src/modules/interfaces/request.interface';
import { LocalModel } from 'src/modules/interfaces/local.model.interface';
import { LocalModelService } from '../services/local.model.service';
import { RequestService } from '../services/request.service';

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

  // general variables
  providers: any[];
  modelSelected: boolean = false;
  
  // user variables
  requesterid: number;
  requestername: string;
  email: string;

  // selected provider variables
  currentProvider: any;
  selectedProvider: any;
  providerid: number;
  providername: string;

  // model variables
  modelName: string;
  model: any;
  modelEmbedURL: string;
  modelToPost: LocalModel;
  localModelId: number;

  // request variables
  requestRequesterId: number;
  requestProviderId: number;
  requestTitle: string;
  requestDescription: string;
  request: Request;


  constructor
  (
    private userService: UserService,
    private localModelService: LocalModelService,
    private requestService: RequestService,
    private appComponent: AppComponent,
    private cdr: ChangeDetectorRef,
    private modalCtrl: ModalController,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() 
  {
    this.appComponent.onInitDone.subscribe(() => {
      this.setUserInformation();
    });
    this.getAllProviders();
  }

  ionViewWillEnter()
  {
    this.getModelInformation();
    this.userHasModel();
    console.log("%c" + "IONVIEWWILLENTER: " + currentUser.modelURI["embedUrl"], "color: purple")
  }

  async getAllProviders()
  {
    this.userService.getAllProviders().subscribe((data) => {
      this.providers = data;
      console.log(this.providers);
    });
  }









  // FUNCTIONS //
  setUserInformation()
  {
    this.requestRequesterId = currentUser.id;
    this.requestername = currentUser.username;
    this.email = currentUser.email;
  }

  selectProvider(event: any){
        
  }


  // MODEL FUNCTIONS //
  userHasModel(){
    if(currentUser.modelURI == null)
    {
      this.modelSelected = false;
      this.modelName = "Select a model in the model library!";
    }
    else
    {
      this.modelSelected = true;
    }
  }

  getModelInformation(){
    this.http.get(currentUser.modelURI).subscribe((data) => {
      this.model = data;
      console.log(data);
      this.modelName = data["name"];
    });
  }

  async viewCurrentModel(){
    const modal = await this.modalCtrl.create({
      component: ModelViewerPage,
      componentProps:
      {
        modelEmbedURL: this.model["embedUrl"]
      }
    });
    return await modal.present();
  }

  changeModel(){
    this.router.navigate(['/library']);
  }


  // HTTP POST FUNCTIONS //
  async createModel(){
    console.log("%c" + "CREATE MODEL: " + this.modelName, "color: orange")
    console.log("name: " + this.modelName)
    console.log("fileURL: " + this.model["embedUrl"])
    console.log("Now procceeding to actually POST...")
    this.modelToPost =
    {
      name: this.modelName,
      fileURL: this.model["embedUrl"],
      tags: "test,test,test"
    }

    this.localModelService.createModel(this.modelToPost).subscribe((data) => {
      console.log(data);
      this.localModelId = data["id"];
      console.log("LOCAL MODEL ID: " + this.localModelId);
    }, error => {
      console.log("ERROR createModel line 156")
      console.log(error);
    });
  }

  async createRequest(){
    console.log("%c" + "CREATE REQUEST: " + this.modelName, "color: orange")
    console.log("title: " + this.requestTitle)
    console.log("description: " + this.requestDescription)
    console.log("requesterId: " + this.requestRequesterId)
    console.log("providerId v2: " + this.selectProvider["id"])
    console.log("providerId: " + this.selectedProvider.id)
    console.log("modelId: " + this.localModelId)
    console.log("regionId: " + 1)
    console.log("tags: " + "test,test,test")
    this.request = 
    {
      title: this.requestTitle,
      description: this.requestDescription,
      requesterId: this.requestRequesterId,
      providerId: this.selectedProvider.id,
      modelId: this.localModelId,
      regionId: 1,
      tags: "test,test,test"
    }



    this.requestService.createRequest(this.request).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log("ERROR createRequest line 173")
      console.log(error);
    })

  }

  async publishRequest(){
    await this.createModel().then(() => {
      this.createRequest();
    },
    error => {
      console.log("ERROR publishRequest line 183")
      console.log(error);
    });
  }

  testValues()
  {
    console.log("%c" + "CREATE REQUEST: " + this.modelName, "color: orange")
    console.log("title: " + this.requestTitle)
    console.log("description: " + this.requestDescription)
    console.log("requesterId: " + this.requestRequesterId)
    console.log("modelId: " + this.localModelId)
    console.log("regionId: " + 1)
    console.log("tags: " + "test,test,test")
    console.log("providerId: " + this.currentProvider.Id)
  }

}
