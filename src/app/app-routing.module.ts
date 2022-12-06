import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllowEBSGuard } from './allow-ebs.guard';
import { AllowRMSGuard } from './allow-rms.guard';

const routes: Routes = [
  {
    path: 'retail', 
    loadChildren: () =>
      import('./retail/retail.module').then((m) => m.RetailModule),
      // canActivate: [AllowRMSGuard]
  },
  {
    path: 'ebs',
    loadChildren: () => import('./ebs/ebs.module').then((m) => m.EBSModule),
    // canActivate: [AllowEBSGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
