import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  data:any[]=[
    {
      name:'primary',
      check:false
    },
    {
      name:'secondary',
      check:true
    },
    {
      name:'warning',
      check:false
    },
    {
      name:'success',
      check:true
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  onClick(item:any){
    console.log(item);
  }

}
