import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
  inputModel = '';
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  
  onInput(ev:any) {
    const value = ev.target!.value;
    
    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g,'');
    
    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl.value = this.inputModel = filteredValue;
  }
  nombre :string='Ramón';
  usuario={
    email:'',
    password:''
  }
  onSubmit(){
    console.log(this.usuario);
  }
}
