import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent  implements OnInit {

  constructor(private popOverCtrl:PopoverController) { }

  ngOnInit() {}
  ocultarModal(a:number){
    this.popOverCtrl.dismiss({
      elemento:a
    });
  }
}
