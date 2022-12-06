import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EBSRoutingModule } from './ebs-routing.module';
import { DistributionComponent } from './distribution/distribution.component';


@NgModule({
  declarations: [
    DistributionComponent
  ],
  imports: [
    CommonModule,
    EBSRoutingModule
  ]
})
export class EBSModule { }
