import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailRoutingModule } from './retail-routing.module';
import { RMSComponent } from './rms/rms.component';
import { RPMComponent } from './rpm/rpm.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StaticcompComponent } from './rms/staticcomp/staticcomp.component'

@NgModule({
  declarations: [RMSComponent, RPMComponent, StaticcompComponent],
  imports: [CommonModule, RetailRoutingModule, ReactiveFormsModule, FormsModule]
})
export class RetailModule {}
