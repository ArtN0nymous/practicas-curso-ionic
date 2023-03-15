import { Component, OnInit } from '@angular/core';
interface Componente {
  icon:string,
  name:string,
  redirectTo:string
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes :Componente[]=[{
    icon:'american-football',
    name:'Action Sheet',
    redirectTo:'/action-sheet'
  },{
    icon:'alert-circle-outline',
    name:'Alert',
    redirectTo:'/alert'
  },
  {
    icon:'person-circle-outline',
    name:'Avatar',
    redirectTo:'/avatar'
  },{
    icon:'radio-button-on-outline',
    name:'Buttons',
    redirectTo:'/buttons'
  },{
    icon:'id-card-outline',
    name:'Cards',
    redirectTo:'/cards'
  },{
    icon:'checkmark-circle-outline',
    name:'Checkbox',
    redirectTo:'/checkbox'
  }];
  constructor() { }

  ngOnInit() {
  }

}
