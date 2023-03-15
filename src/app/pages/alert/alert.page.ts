import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';
  constructor(private alertController: AlertController) {}

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
  async presentAlertPront() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [{
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            console.log(data);
          },
      }],
      inputs: [
        {
          name:'name',
          placeholder: 'Name',
        },
        {
          name:'nickname',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
            //readonly:true
          },
        },
        {
          name:'age',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name:'description',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
}
