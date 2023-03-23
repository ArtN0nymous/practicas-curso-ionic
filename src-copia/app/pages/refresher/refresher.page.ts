import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  elementos =Array(5);
  handleRefresh( event:any){
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      this.elementos=Array(this.elementos.length+5);
    }, 2000);
  }
}
