import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { AppSate } from 'src/store/app.store';
import { CommunicationService } from '../shared/communication.service';
import { Store } from '@ngrx/store';
import { get_user, increment } from 'src/store/app.actions';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('inputfield') inputfield!: ElementRef;
  @ViewChild('test1') testComp!: TestComponent;
  @ViewChildren('first') eleP!: QueryList<ElementRef>;
  @Input()
  set focousButton(value: boolean) {
    if (value) {
      if (this.inputfield) {
        this.inputfield.nativeElement.focus();
      }
    } else {
      if (this.inputfield) {
        this.inputfield.nativeElement.blur();
      }
    }
  }

  @Output() nameEmitter = new EventEmitter<string>();
  username: string = '';
  value = 0;

  constructor(
    private router: Router,
    private communicationService: CommunicationService,
    private store: Store<AppSate>
  ) {}
  ngOnInit(): void {}

  routeToEBS() {
    console.log('EBS has veen clicked..');
    this.router.navigate(['/ebs']);
  }

  routeToRetail() {
    console.log('RMS has been clicked...');
    this.router.navigate(['/retail']);
  }
  senddata() {
    this.nameEmitter.emit(this.username);
    this.communicationService.dogName.next('Doggy of ' + this.username);
    this.store.dispatch(increment({ value: +this.value }));
    this.store.dispatch(get_user({user: {username: 'Dhanauti'}}));
  }

  InsertErrorComponent() {}
  incr() {
    this.testComp.increment();
  }

  decr() {
    this.testComp.decrement();
  }

  changeBackground() {
    this.eleP.first.nativeElement.style.backgroundColor = 'red';
    this.eleP.last.nativeElement.style.backgroundColor = 'green';
  }
}
