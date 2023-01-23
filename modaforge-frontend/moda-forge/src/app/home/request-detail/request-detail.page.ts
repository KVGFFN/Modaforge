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
    private requestService: RequestService) { }

  requestId: number;
  modelId: number;

  modelData: any;
  requestData: any;

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
          console.log("REQUEST: ");
          console.log(data);
          this.modelId = data.modelId;
          resolve();
        },
        error: (e) => { console.log(e) }
      });
    });
  }


  async getModel() {
    if (this.modelId) {
      this.localModelService.getModelById(this.modelId).subscribe({
        next: (data) => {
          console.log("MODEL: ");
          console.log(data);
        }
      });
    }
  }


}
