import { TestBed } from '@angular/core/testing';

import { ApiRecommendationService } from './api-recommendation.service';

describe('ApiRecommendationService', () => {
  let service: ApiRecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
