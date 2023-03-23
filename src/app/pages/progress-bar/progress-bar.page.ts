import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent, RangeValue } from '@ionic/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  constructor() { }
  progress:number=0;
  temperatura!:RangeValue;
  ngOnInit() {
    setInterval(() => {
      this.progress+=0.01;
      if(this.progress>1){
        setTimeout(() => {
          this.progress=0;
        }, 1000);
      }
    }, 50);
  }
  cargarTemperatura(ev:Event){
    this.temperatura = (ev as RangeCustomEvent).detail.value;
    console.log(this.temperatura);
  }
}
