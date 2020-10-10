import { TestBed } from '@angular/core/testing';

import { ClientDetailGuard } from './client-detail.guard';

describe('ProductDetailGuard', () => {
  let guard: ClientDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClientDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
