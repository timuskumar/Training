import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RMSComponent } from './rms/rms.component';
import { RPMComponent } from './rpm/rpm.component';

const routes: Routes = [
  {
    path: '',
    component: RPMComponent,
    children: [
      {
        path: 'rms',
        component: RMSComponent,
      },
      {
        path: 'rpm',
        component: RPMComponent,
      },
      {
        path: 'rms/:id',
        component: RMSComponent,
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailRoutingModule {}
