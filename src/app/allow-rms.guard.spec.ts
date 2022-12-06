import { TestBed } from '@angular/core/testing';

import { AllowRMSGuard } from './allow-rms.guard';

describe('AllowRMSGuard', () => {
  let guard: AllowRMSGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowRMSGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
