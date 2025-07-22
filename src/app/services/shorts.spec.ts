import { TestBed } from '@angular/core/testing';

import { Shorts } from './shorts';

describe('Shorts', () => {
  let service: Shorts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shorts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
