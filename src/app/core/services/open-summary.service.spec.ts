import { TestBed } from '@angular/core/testing';

import { OpenSummaryService } from './open-summary.service';

describe('OpenSummaryService', () => {
  let service: OpenSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
