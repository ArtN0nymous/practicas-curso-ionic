import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }
  loading!:HTMLIonLoadingElement;
  async mostrarLoading(){
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando',
      //duration: 3000,
      spinner: 'circles',
    });

    this.loading.present().then(()=>{
      this.dismissLoading();
    });
  }
  dismissLoading(){
    setTimeout(() => {
      this.loading.dismiss();
    }, 3000);
  }
}
