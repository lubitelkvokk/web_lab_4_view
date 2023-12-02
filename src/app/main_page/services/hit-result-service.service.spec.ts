import { TestBed } from '@angular/core/testing';

import { HitResultServiceService } from './hit-result-service.service';

describe('HitResultServiceService', () => {
  let service: HitResultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HitResultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
