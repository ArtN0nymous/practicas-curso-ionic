import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ModalPageModule } from '../modal/modal.module';
import { RefresherPageModule } from '../refresher/refresher.module';
import { ProgressBarPageModule } from '../progress-bar/progress-bar.module';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tabs/modal',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'modal',
        loadChildren:()=>import('../modal/modal.module').then(m=>ModalPageModule)
      },
      {
        path:'refresher',
        loadChildren:()=>import('../refresher/refresher.module').then(m=>RefresherPageModule)
      },
      {
        path:'progressbar',
        loadChildren:()=>import('../progress-bar/progress-bar.module').then(m=>ProgressBarPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
