import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { LiffGuard } from './liff.guard';

describe('LiffGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiffGuard]
    });
  });

  it('should ...', inject([LiffGuard], (guard: LiffGuard) => {
    expect(guard).toBeTruthy();
  }));
});
