import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  data:any[]=Array(20);
  constructor() { }
  ngOnInit() {
  }
  onIonInfinite(event:any){
    setTimeout(() => {
      if(this.data.length>=50){
        event.target.complete();
        console.log(event);
        event.target.disabled=true;
        return;
      }
      const newArray = Array(20);
      this.data.push(...newArray);
      event.target.complete();
    }, 1500);
  }
}
