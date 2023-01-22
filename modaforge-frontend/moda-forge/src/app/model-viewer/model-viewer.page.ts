import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.page.html',
  styleUrls: ['./model-viewer.page.scss'],
})
export class ModelViewerPage implements OnInit {

  @Input() modelEmbedURL: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { 
    console.log
  }

  ionViewWillEnter() {
    console.log("%c" + "MODEL URL: " + this.modelEmbedURL, "color: pink");
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }


}
