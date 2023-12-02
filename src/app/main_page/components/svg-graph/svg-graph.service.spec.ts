import { TestBed } from '@angular/core/testing';

import { SvgGraphService } from './svg-graph.service';

describe('SvgGraphService', () => {
  let service: SvgGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvgGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
