import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';
import { DomSanitizer } from '@angular/platform-browser';
import { APIstate } from 'src/helpers/APIstate';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {


  constructor(private modelService: ModelService, 
    private sanitizer: DomSanitizer, 
    private ref: ChangeDetectorRef,
    private http: HttpClient
    ) { }

  // variables
  realModel?: string
  hasLoaded = false;
  modelIsAssigned = false;
  library = [];

  parent_modelurls = [];
  parent_modelnames = [];

  searchTerm: string;

  // transform url
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  hasInitialized = false;
  
  ngOnInit()
  {
    console.log("LIBRARY.PAGE.TS: APISTATE IS " + APIstate.isActive);

    if (!this.hasInitialized)
    {
      this.getAllModels();
      this.hasInitialized = true;
    }
  }

  getAllModels() {
    this.modelService.getAllModels().subscribe({
      next: (data) => {
        this.library = data.results;
        this.library.forEach(element => {
          this.parent_modelurls.push(element.embedUrl);
          this.parent_modelnames.push(element.name);
        });

        this.hasLoaded = true;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  searchAllModels(searchTerm)
  {
    this.library = [];
    this.parent_modelurls = [];
    this.parent_modelnames = [];
    this.http.get(`https://api.sketchfab.com/v3/search?type=models&q=${searchTerm}&archives_flavours=false`)
    .subscribe({
      next: (data) => {
        this.library = data['results']
        this.library.forEach(element => {
          this.parent_modelurls.push(element.embedUrl);
          this.parent_modelnames.push(element.name);
        });

        this.hasLoaded = true;
      }
    });
    
  }


    
}




