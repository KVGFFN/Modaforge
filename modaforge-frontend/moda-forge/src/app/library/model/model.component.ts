import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from 'src/app/app.component';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log("CHILD COMPONENT: MODEL");
    console.log(this.allModels);
  }

  @Input() allModels = [];
  @Input() singleModel: string;

  // return sanitized model url from library

  // transform(url) {
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  // }


}

