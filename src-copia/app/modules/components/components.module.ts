import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';



@NgModule({
  declarations: [HeaderComponent,PopoverInfoComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[HeaderComponent,PopoverInfoComponent]
})
export class ComponentsModule { }
