import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModelService } from 'src/app/services/model.service';
import { Model } from 'src/modules/interfaces/model.interface';
import { ModelDetail } from 'src/modules/interfaces/model-detail.interface';
import { SafePipe } from 'src/app/safe.pipe';


@Component({
  selector: 'app-model-detail',
  templateUrl: './model-detail.page.html',
  styleUrls: ['./model-detail.page.scss'],
})
export class ModelDetailPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private modelService: ModelService,
  ) { }



  modelId: string;
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
    // yellow console log
    console.log("%cmodel-detail.page.ts -- createRequest()", "color: yellow");
  }


}
