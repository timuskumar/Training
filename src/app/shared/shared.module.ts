import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { PlaceholderDirective } from './placeholder.directive';
import { CommunicationService } from './communication.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ErrorComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ErrorComponent, PlaceholderDirective]
})
export class SharedModule { }
