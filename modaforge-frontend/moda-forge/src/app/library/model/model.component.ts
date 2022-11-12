import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {

  @Input() modeltitle: any;
  @Input() modeldescription: any;
  @Input() modelimage: any;

  constructor() { }

  ngOnInit() {}

}
