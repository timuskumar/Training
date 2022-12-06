import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticcompComponent } from './staticcomp.component';

describe('StaticcompComponent', () => {
  let component: StaticcompComponent;
  let fixture: ComponentFixture<StaticcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
