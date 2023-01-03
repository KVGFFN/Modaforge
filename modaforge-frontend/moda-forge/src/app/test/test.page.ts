import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  

  constructor(private requestService: RequestService) { }

  ngOnInit() {

  }

  getRequest()
  {
    // make yellow console log
    console.log("%ctest.page.ts -- getRequest()", "color: yellow")

    this.requestService.getRequest(1).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

}
