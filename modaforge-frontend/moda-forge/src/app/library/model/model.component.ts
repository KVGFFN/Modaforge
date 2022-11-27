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
    console.log(this.child_modelurls);
  }

  // library.page -> model.component variables
  @Input() child_modelurls = [];
  @Input() child_modelnames = [];

}

