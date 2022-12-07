import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { currentUser } from 'src/helpers/CurrentUser';
import { HttpClient } from '@angular/common/http';
import { ProviderService } from '../services/provider.service';
import { Provider } from 'src/modules/interfaces/provider.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private providerService: ProviderService
  ) { }

  // variables
  id: number;
  name: string;
  email: string;
  picture: string;
  userdata = [];
  userIsLoaded: boolean = false;

  provider: Provider = {
    id: 0,
    name: "test",
    services: "Ik kan heel goed printen met mijn HP multi color printer",
    userId: 420,
    user: {
      id: 0,
      name: "",
      verified: false,
      email: "",
      picture: "",
      regionId: 0,
      region: {
        id: 0,
        name: "",
        zipCode: 0
      }
    }
  }

  getAllUsers() {
    try {
      this.userService.getAllUsers().subscribe(data => {
        console.log(data);
        this.userdata = data;
        this.userIsLoaded = true;
      }, error => {
        console.log(error);
      });
    }
    catch (e) {
      console.log(e);
    }

  }

  // Oplossing op probleem waarbij attributen worden vastgelegd ongeacht dat Users zijn geladen of niet
  async waitTillTrue() {
    while (this.userIsLoaded == false) {
      await new Promise(resolve => setTimeout(resolve, 1000));

    }
    if (this.userIsLoaded) {
      for (let i = 0; i < this.userdata.length; i++) {
        console.log(this.userdata[i].name);
        if (this.userdata[i].name == currentUser.username && this.userdata[i].email == currentUser.email) {
          this.id = this.userdata[i].id;
          this.name = this.userdata[i].name;
          this.email = this.userdata[i].email;
          this.picture = this.userdata[i].picture;
        }
      }
    }
  }



  createProvider(provider : Provider) {
    this.providerService.addProvider(provider).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
    
  }


  ngOnInit() {
    this.getAllUsers();
    this.waitTillTrue();
  }


}
