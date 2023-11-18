import { TestBed } from '@angular/core/testing';

import { GadgetPromiseService } from './gadget-promise.service';

describe('GadgetPromiseService', () => {
  let service: GadgetPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GadgetPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
