import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { ModalController, Platform } from '@ionic/angular';
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
  providerName: string;
  providerSelected: boolean = false;

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
    private modalCtrl: ModalController,
    private http: HttpClient,
    private router: Router,
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

  ionViewDidEnter()
  {
    if (currentUser.selectedProvider != null)
    {
      console.log("THERE IS A PROVIDER SELECTED")
      this.providerSelected = true;
      this.selectedProvider = currentUser.selectedProvider;
      this.currentProvider = currentUser.selectedProvider;
      this.providerName = this.currentProvider["name"];
      this.providerid = this.currentProvider["id"];

    }
    else
    {
      console.log("THERE IS NO PROVIDER SELECTED")
      this.providerSelected = false;
    }
  }

  async getAllProviders()
  {
    this.userService.getAllProviders().subscribe((data) => {
      this.providers = data;
      console.log(this.providers);
    });
  }









  // FUNCTIONS //
  // USER FUNCTIONS //
  setUserInformation()
  {
    this.requestRequesterId = currentUser.id;
    this.requestername = currentUser.username;
    this.email = currentUser.email;
  }

  selectProvider($event: any){
    this.selectedProvider = $event.detail.value;
    console.log(this.selectedProvider);
    console.log(this.selectedProvider["id"]);
  }
  // PROVIDER FUNCTIONS //
  goToProvider()
  {
    this.router.navigate(['/printers']);
  }

  clearProvider()
  {
    this.providerSelected = false;
    this.currentProvider = undefined;
    this.selectedProvider = undefined;
    this.providerid = undefined;
    this.providerName = undefined;
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

    // this.localModelService.createModel(this.modelToPost).subscribe((data) => {
    //   console.log(data);
    //   this.localModelId = data["id"];
    //   console.log("LOCAL MODEL ID: " + this.localModelId);
    // }, error => {
    //   console.log("ERROR createModel line 156")
    //   console.log(error);
    // });

    let result = await this.localModelService.createModel(this.modelToPost).toPromise();
    console.log(result);
    this.localModelId = result["id"];
    console.log("LOCAL MODEL ID: " + this.localModelId);
  }

  async createRequest(){
    this.request = 
    {
      title: this.requestTitle,
      description: this.requestDescription,
      requesterId: currentUser.id,
      providerId: this.selectedProvider["id"],
      modelId: this.localModelId,
      regionId: 1,                                // REGION HAS TO BE CHANGED
      tags: "test,test,test"                      // USER HAS TO GIVE IN TABS
    }

    this.requestService.createRequest(this.request).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log("ERROR createRequest line 173")
      console.log(error);
    })

  }

  async publishRequest(){
    try
    {
      await this.createModel();
      this.createRequest();
    } catch(error)
    {
      console.log("ERROR publishRequest line 186")
      console.log(error);
    }
    alert("Request has been sent!");
    // this.router.navigate(['/home'])
    // .then(() => {
    //   window.location.reload();
    // });
  }

  test()
  {
    console.log(currentUser.selectedProvider)
  }


}
