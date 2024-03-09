import { TestBed } from '@angular/core/testing';

import { ApiFlashcardsService } from './api-flashcards.service';

describe('ApiFlashcardsService', () => {
  let service: ApiFlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFlashcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
