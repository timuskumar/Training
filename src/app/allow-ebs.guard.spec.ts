import { TestBed } from '@angular/core/testing';

import { AllowEBSGuard } from './allow-ebs.guard';

describe('AllowEBSGuard', () => {
  let guard: AllowEBSGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowEBSGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
