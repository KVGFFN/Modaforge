import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelService } from 'src/app/services/model.service';
import { Model } from 'src/modules/interfaces/model.interface';
import { ModelDetail } from 'src/modules/interfaces/model-detail.interface';
import { SafePipe } from 'src/app/safe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { currentUser } from 'src/helpers/CurrentUser';

@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.page.html',
  styleUrls: ['./model-detail.page.scss'],
})

export class ModelDetailPage implements OnInit {

  constructor(
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private modelService: ModelService,
    private router: Router
  ) { }



  modelId: string;
  modelURI: string;
  model: ModelDetail

  name: string;
  description: string;
  embedUrl: string;

  ngOnInit() {
    this.modelId = this.activatedRoute.snapshot.paramMap.get('modelId');
    this.modelService.getModelById(this.modelId).subscribe({
      next: (data) => {
        this.assignData(data);
      }
    });
    
    
  }

  assignData(data: any) {
    this.name = data.name;
    this.description = data.description;
    this.embedUrl = data.embedUrl;
  }

  createRequest()
  {
    currentUser.modelURI = "https://api.sketchfab.com/v3/models/" + this.modelId
    console.log("%c MODEL URI: " + currentUser.modelURI, "color: yellow")
    this.router.navigate(['/create-request']);
  }


}
