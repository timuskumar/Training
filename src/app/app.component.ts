import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppSate } from 'src/store/app.store';
import { CommunicationService } from './shared/communication.service';
import { Store } from '@ngrx/store';
import { getCount } from 'src/store/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'testApp';
  focousButton = false;
  username = '';
  dogname = '';
  value = 0;

  

  ngOnInit() {
    this.communicationService.dogName.subscribe((dongName) => {
      this.dogname = dongName;
    });

    this.store.select(getCount).subscribe((data) => {
      this.value = data;
    });
  }

  constructor(
    private communicationService: CommunicationService,
    private store: Store<AppSate>
  ) {}

  changeValue() {
    this.focousButton = !this.focousButton;
  }

  receiveName(username: string) {
    this.username = username;
  }

  
}
