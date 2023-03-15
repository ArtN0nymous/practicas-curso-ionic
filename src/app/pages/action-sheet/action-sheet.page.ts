import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( private actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {
  }
  onClick(){
    this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      backdropDismiss:false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon:'trash',
          cssClass:'rojo',
          data: {
            action: 'delete',
          },
          handler:()=>{
            console.log('delete')
          }
        },
        {
          text: 'Share',
          data: {
            action: 'share',
          },
          handler:()=>{
            console.log('share')
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    //this.result = JSON.stringify(result, null, 2);
  }
}
