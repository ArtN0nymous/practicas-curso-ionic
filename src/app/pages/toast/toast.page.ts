import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl:ToastController) { }

  ngOnInit() {
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Hello World!',
      duration: 3000,
      buttons: [
        {
          text: 'More Info',
          role: 'info',
          handler: () => { console.log('More info'); }
        },
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: () => { console.log('Dimidd'); }
        }
      ]
    });

    await toast.present();

    const { data } = await toast.onDidDismiss();
    console.log(data);
  }
}
