import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {


  constructor(private modelService: ModelService, private sanitizer: DomSanitizer, private ref: ChangeDetectorRef) { }

  // variables
  realModel?: string
  hasLoaded = false;
  modelIsAssigned = false;
  library = [];
  libraryTillFive = [];
  allModelUrls = [];
  allModelUids = [];
  oneModel: string;

  // transform url
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  hasInitialized = false;
  
  ngOnInit()
  {
    if (!this.hasInitialized)
    {
      this.getAllModels();
    }
  }

  // get all models from api
  // stop method after 5 models
  getAllModels() {
    this.modelService.getAllModels().subscribe({
      next: (data) => {
        this.library = data.results;
        this.libraryTillFive = this.library.slice(0, 5);
        this.libraryTillFive.forEach(element => {
          this.transform(element.embedUrl);
          this.allModelUrls.push(element.embedUrl);
          console.log("EMBEDURL: " + element.embedUrl);
          this.allModelUids.push(element.uid);
        });

        this.hasLoaded = true;
        console.log("LIBRARY: >>> " + this.libraryTillFive[0]['embedUrl']);

      },
      error: (error) => {
        console.log(error);
      }
    });
  }


    
}




