import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIstate } from 'src/helpers/APIstate';
import { IP } from 'src/helpers/IP';

@Component({
  selector: 'app-no-api',
  templateUrl: './no-api.page.html',
  styleUrls: ['./no-api.page.scss'],
})
export class NoApiPage implements OnInit {


  constructor
  (
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  buttonText: string = "RETRY";

  async tryAgain() {
    // get class but button
    let button = document.getElementsByClassName("btn");
    // change button text
    button[0].innerHTML = "RETRYING...";
    button[0].setAttribute("disabled", "true");
    this.http.get(`${IP.local}/api/User`).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/register']);
      }, (err) => {
        alert("Still no API found")
        button[0].innerHTML = "RETRY";
        button[0].removeAttribute("disabled");
      }
    )
  }
}
