import { TestBed } from '@angular/core/testing';

import { ApiSummaryService } from './api-summary.service';

describe('ApiSummaryService', () => {
  let service: ApiSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
