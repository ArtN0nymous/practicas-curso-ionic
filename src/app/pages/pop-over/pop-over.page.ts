import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  constructor(private popOverCtrl:PopoverController) { }

  ngOnInit() {
  }
  async mostrarPopOver(e: Event) {
    const popover = await this.popOverCtrl.create({
      component: PopoverInfoComponent,
      event: e,
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();
    console.log(data);
  }
}
