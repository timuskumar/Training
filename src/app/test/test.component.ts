import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { increment } from 'src/store/app.actions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  count = 0;
  @ContentChild('content') h3Ele!: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    console.log('increment executed');
    this.count++
  }

  decrement() {
    console.log('decrement executed');
    this.count--;
  }

  changeColor() {
    this.h3Ele.nativeElement.style.color = 'yellow';
  }

}
