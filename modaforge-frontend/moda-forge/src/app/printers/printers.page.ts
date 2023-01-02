import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.page.html',
  styleUrls: ['./printers.page.scss'],
})
export class PrintersPage implements OnInit {

  constructor() { }

  // Variables
  printers: any[] = ["test", "test2", "test3", "test4", "test5"];

  ngOnInit() {
  }

}
