import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rejects } from 'assert';
import { LocalModelService } from 'src/app/services/local.model.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.page.html',
  styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private localModelService: LocalModelService,
    private requestService: RequestService
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
  requestProvider: any;
  requestProviderName: string;

  ngOnInit() {
    this.getRequest().then(() => {
      this.getModel();
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
    this.requestProvider = data.provider;
    if (data.provider) {
      this.requestProviderName = data.provider.name;
    } else {
      this.requestProviderName = 'No provider assigned';
    }
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
}
